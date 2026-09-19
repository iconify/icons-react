import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsle34bel.css';
import '../../css/e/e24p9ccpg.css';
import '../../css/j/j3k06lbcb.css';
import '../../css/o/o6419p7rt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsle34bel"/><path class="e24p9ccpg"/><path class="j3k06lbcb"/><path class="o6419p7rt"/>`,
		"fallback": "devicon:materialui",
	});
}

export default Component;
