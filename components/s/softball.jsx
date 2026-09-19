import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leg0v_b6k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leg0v_b6k"/>`,
		"fallback": "fluent-emoji-high-contrast:softball",
	});
}

export default Component;
