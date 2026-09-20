import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nb5a1ubht.css';
import '../../css/o/okhot3btz.css';
import '../../css/m/mdi54bckg.css';
import '../../css/c/chfys9p0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nb5a1ubht"/><path class="okhot3btz"/><path class="mdi54bckg"/><path class="chfys9p0h"/></g>`,
		"fallback": "streamline-cyber-color:origami-paper-bird",
	});
}

export default Component;
