import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-ihz2d6k.css';
import '../../css/j/jnzjgqb7t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-ihz2d6k"/><path class="jnzjgqb7t"/>`,
		"fallback": "streamline-pixel:user-gender-male",
	});
}

export default Component;
