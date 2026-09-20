import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrq4i1bwa.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrq4i1bwa"/>`,
		"fallback": "octicon:sync",
	});
}

export default Component;
