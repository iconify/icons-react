import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2i--3bkl.css';
import '../../css/b/bgkzp94ig.css';
import '../../css/p/phtgp2byk.css';
import '../../css/w/w_50c_b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j2i--3bkl"/><path class="bgkzp94ig"/><path class="phtgp2byk"/><path class="w_50c_b_t"/></g>`,
		"fallback": "streamline-ultimate-color:medical-specialty-feet",
	});
}

export default Component;
