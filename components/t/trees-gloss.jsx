import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz_d23t2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz_d23t2x"/>`,
		"fallback": "withicons:trees-gloss",
	});
}

export default Component;
