import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjljv5b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjljv5b7r"/>`,
		"fallback": "tabler:phone-outgoing",
	});
}

export default Component;
