import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iohlvocdc.css';
import '../../css/l/lsqpyjwzm.css';
import '../../css/n/nkpeuec3f.css';
import '../../css/d/d461q1bsh.css';
import '../../css/i/izfv-wzfa.css';
import '../../css/j/jqrq48bfx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iohlvocdc"/><path class="lsqpyjwzm"/><path class="nkpeuec3f"/><path class="d461q1bsh"/><circle class="izfv-wzfa"/><circle class="jqrq48bfx"/></g>`,
		"fallback": "icon-park:transfer",
	});
}

export default Component;
