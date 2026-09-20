import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnf3jj1ai.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnf3jj1ai"/>`,
		"fallback": "nonicons:toml-16",
	});
}

export default Component;
