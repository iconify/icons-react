import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws-5jebqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws-5jebqm"/>`,
		"fallback": "tabler:letter-d",
	});
}

export default Component;
