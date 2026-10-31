import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/l/lh2glsbmm.css';
import '../../css/s/s9c9z0bxi.css';
import '../../css/o/o5_gs3buy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="lh2glsbmm"/><path class="s9c9z0bxi"/><path class="o5_gs3buy"/></g>`,
		"fallback": "streamline-kameleon-color:prism-2-pop",
	});
}

export default Component;
