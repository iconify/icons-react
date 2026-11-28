import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk_qalbyb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk_qalbyb"/>`,
		"fallback": "pullo:sort-alphabetical-ascending-thin",
	});
}

export default Component;
