import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdzjzu6qb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdzjzu6qb"/>`,
		"fallback": "carbon:logo-astradb",
	});
}

export default Component;
