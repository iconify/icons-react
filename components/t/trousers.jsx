import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8u2_dbcs.css';
import '../../css/l/lcxos_xok.css';
import '../../css/g/gpt06qbnz.css';
import '../../css/p/px2ac0fup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n8u2_dbcs"/><path class="lcxos_xok"/><path class="gpt06qbnz"/><path class="px2ac0fup"/></g>`,
		"fallback": "streamline-cyber-color:trousers",
	});
}

export default Component;
