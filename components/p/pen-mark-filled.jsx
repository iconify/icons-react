import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg2ph0bfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg2ph0bfe"/>`,
		"fallback": "tdesign:pen-mark-filled",
	});
}

export default Component;
