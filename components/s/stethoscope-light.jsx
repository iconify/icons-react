import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fek2c-bwj.css';
import '../../css/o/ocs1eb2_l.css';
import '../../css/x/x-l7iicwp.css';
import '../../css/i/icvm-8bxe.css';
import '../../css/c/ctw4dzbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="fek2c-bwj"/><circle class="ocs1eb2_l"/><circle class="x-l7iicwp"/><path class="icvm-8bxe"/><path class="ctw4dzbju"/></g>`,
		"fallback": "lets-icons:stethoscope-light",
	});
}

export default Component;
