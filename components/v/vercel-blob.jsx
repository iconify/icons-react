import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u14w9_p_l.css';
import '../../css/c/c_mpk-b8s.css';
import '../../css/a/akfktzbbg.css';
import '../../css/h/h1kg4daid.css';

const viewBox = {"width":209.466,"height":207.096};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u14w9_p_l"/><path class="c_mpk-b8s"/><path class="akfktzbbg"/><path class="h1kg4daid"/>`,
		"fallback": "thesvg-color:vercel-blob",
	});
}

export default Component;
