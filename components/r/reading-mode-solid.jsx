import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlb9wd9vy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlb9wd9vy"/>`,
		"fallback": "fluent-mdl2:reading-mode-solid",
	});
}

export default Component;
