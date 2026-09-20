import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thft0msxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thft0msxv"/>`,
		"fallback": "streamline-ultimate:single-woman-bold",
	});
}

export default Component;
