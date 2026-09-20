import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6_3-mbpg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6_3-mbpg"/>`,
		"fallback": "memory:pictogrammers",
	});
}

export default Component;
