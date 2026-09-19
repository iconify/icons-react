import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5ns5puhf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5ns5puhf"/>`,
		"fallback": "fluent-mdl2:maximum-value",
	});
}

export default Component;
