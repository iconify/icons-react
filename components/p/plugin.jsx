import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnjstib_j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnjstib_j"/>`,
		"fallback": "bi:plugin",
	});
}

export default Component;
