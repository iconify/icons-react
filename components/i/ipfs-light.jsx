import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvl2anbys.css';
import '../../css/z/z373du9bh.css';
import '../../css/e/eyou9rgfn.css';
import '../../css/j/jz07vobep.css';
import '../../css/h/hohob5bwm.css';
import '../../css/z/zpntdtg1s.css';
import '../../css/w/w1y5f9bfl.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="pvl2anbys"/><path class="z373du9bh"/><path class="eyou9rgfn"/><path class="jz07vobep"/><path class="hohob5bwm"/><path class="zpntdtg1s"/><path class="w1y5f9bfl"/></g>`,
		"fallback": "skill-icons:ipfs-light",
	});
}

export default Component;
