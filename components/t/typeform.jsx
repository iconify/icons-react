import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woj_30btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woj_30btd"/>`,
		"fallback": "simple-icons:typeform",
	});
}

export default Component;
