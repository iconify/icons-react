import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/er-sh_b2f.css';
import '../../css/j/jybucjbit.css';
import '../../css/i/ias7qac9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="er-sh_b2f"/><path class="jybucjbit"/><path class="ias7qac9l"/></g>`,
		"fallback": "streamline-cyber-color:map",
	});
}

export default Component;
