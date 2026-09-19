import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dihsqs3sw.css';
import '../../css/o/o69vp97da.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dihsqs3sw"/><path class="o69vp97da"/>`,
		"fallback": "carbon:type-pattern",
	});
}

export default Component;
