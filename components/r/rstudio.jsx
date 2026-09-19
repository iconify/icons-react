import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_32mb0cg.css';
import '../../css/q/qsse9abge.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_32mb0cg"/><path class="qsse9abge"/>`,
		"fallback": "devicon-plain:rstudio",
	});
}

export default Component;
