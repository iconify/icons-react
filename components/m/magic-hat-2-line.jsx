import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdd2sdbqm.css';
import '../../css/e/efp65k_yk.css';
import '../../css/p/pq21tvbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdd2sdbqm"/><path class="efp65k_yk"/><path clip-rule="evenodd" class="pq21tvbkk"/>`,
		"fallback": "mingcute:magic-hat-2-line",
	});
}

export default Component;
