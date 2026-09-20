import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9h-vxq5g.css';
import '../../css/s/suuc62d_l.css';
import '../../css/r/r6gzjgb-n.css';
import '../../css/u/uzv54sbmg.css';
import '../../css/b/bmsp2vnsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r9h-vxq5g"/><path class="suuc62d_l"/><path class="r6gzjgb-n"/><path class="uzv54sbmg"/><path class="bmsp2vnsd"/></g>`,
		"fallback": "streamline-cyber-color:play-button",
	});
}

export default Component;
