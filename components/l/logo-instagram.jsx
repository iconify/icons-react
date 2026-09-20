import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxezv4bar.css';
import '../../css/k/k-ma4qafd.css';
import '../../css/t/thvl62kla.css';
import '../../css/c/cg77kzb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxezv4bar"/><path class="k-ma4qafd"/><path class="thvl62kla"/><path class="cg77kzb9i"/></g>`,
		"fallback": "tdesign:logo-instagram",
	});
}

export default Component;
