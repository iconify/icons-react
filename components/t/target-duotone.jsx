import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5oqn8unq.css';
import '../../css/b/bb6-6oplo.css';
import '../../css/h/hex7kcqxe.css';
import '../../css/e/ehsr83pwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v5oqn8unq"/><path class="bb6-6oplo"/><path class="hex7kcqxe"/><path class="ehsr83pwr"/></g>`,
		"fallback": "si:target-duotone",
	});
}

export default Component;
