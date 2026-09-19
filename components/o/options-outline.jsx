import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5vc2lbnc.css';
import '../../css/o/o70nwy-rj.css';
import '../../css/h/hr1b_yvco.css';
import '../../css/i/its46bcpu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5vc2lbnc"/><circle class="o70nwy-rj"/><circle class="hr1b_yvco"/><circle class="its46bcpu"/>`,
		"fallback": "famicons:options-outline",
	});
}

export default Component;
