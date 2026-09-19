import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axs82db6h.css';
import '../../css/d/d1z03cbds.css';
import '../../css/t/tjlr-ybbo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axs82db6h"/><path class="d1z03cbds"/><path class="tjlr-ybbo"/>`,
		"fallback": "carbon:pointer-text",
	});
}

export default Component;
