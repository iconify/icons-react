import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln0_z3bkf.css';
import '../../css/f/fg9x0cckk.css';
import '../../css/z/z8mmwq-ti.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln0_z3bkf"/><path class="fg9x0cckk"/><path class="z8mmwq-ti"/>`,
		"fallback": "energy-icons:power-cable-48",
	});
}

export default Component;
