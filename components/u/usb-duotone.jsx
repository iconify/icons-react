import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swsab_86e.css';
import '../../css/n/ng521n2fi.css';
import '../../css/t/th7pbs4yu.css';
import '../../css/o/oyqurmbjm.css';
import '../../css/e/eftk9lbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="swsab_86e"/><circle class="ng521n2fi"/><path clip-rule="evenodd" class="th7pbs4yu"/><path class="oyqurmbjm"/><path class="eftk9lbjg"/></g>`,
		"fallback": "reicon:usb-duotone",
	});
}

export default Component;
