import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om5rb4z9e.css';
import '../../css/h/h62eebccu.css';
import '../../css/f/fj8_lom1v.css';
import '../../css/f/f557nxb9g.css';
import '../../css/y/y9dyeo2-d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om5rb4z9e"/><path class="h62eebccu"/><path class="fj8_lom1v"/><path class="f557nxb9g"/><path class="y9dyeo2-d"/>`,
		"fallback": "devicon:llvm",
	});
}

export default Component;
