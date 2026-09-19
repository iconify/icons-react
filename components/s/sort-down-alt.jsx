import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnp-4onrc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnp-4onrc"/>`,
		"fallback": "bi:sort-down-alt",
	});
}

export default Component;
