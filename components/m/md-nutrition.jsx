import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcc7plb6l.css';
import '../../css/r/rhcdyqe0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcc7plb6l"/><path class="rhcdyqe0l"/>`,
		"fallback": "ion:md-nutrition",
	});
}

export default Component;
