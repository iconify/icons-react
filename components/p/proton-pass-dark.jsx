import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv9z5ggml.css';
import '../../css/o/o8wjvtbjz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv9z5ggml"/><path class="o8wjvtbjz"/>`,
		"fallback": "selfhst:proton-pass-dark",
	});
}

export default Component;
