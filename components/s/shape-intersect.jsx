import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgtr2_73j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgtr2_73j"/>`,
		"fallback": "carbon:shape-intersect",
	});
}

export default Component;
