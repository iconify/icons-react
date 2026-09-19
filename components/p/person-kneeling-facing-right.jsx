import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw9z_x7cg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw9z_x7cg"/>`,
		"fallback": "fluent-emoji-high-contrast:person-kneeling-facing-right",
	});
}

export default Component;
