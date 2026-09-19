import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrkfhlbrj.css';
import '../../css/c/c0pcv8b8q.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrkfhlbrj"/><path class="c0pcv8b8q"/>`,
		"fallback": "foundation:page-delete",
	});
}

export default Component;
