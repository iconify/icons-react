import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzn75-sia.css';
import '../../css/l/lvyhgdb0w.css';
import '../../css/g/g3x18gbzi.css';
import '../../css/m/mk0pambyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzn75-sia"/><path class="lvyhgdb0w"/><path class="g3x18gbzi"/><path class="mk0pambyu"/></g>`,
		"fallback": "streamline-cyber-color:shield-3",
	});
}

export default Component;
