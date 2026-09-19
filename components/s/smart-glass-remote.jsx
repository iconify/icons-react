import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzim4sb6x.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzim4sb6x"/>`,
		"fallback": "fluent-mdl2:smart-glass-remote",
	});
}

export default Component;
