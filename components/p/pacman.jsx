import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvjqrqbfb.css';
import '../../css/b/bpj4ctbvy.css';
import '../../css/l/lw4f_abbw.css';
import '../../css/x/x-yblppwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pvjqrqbfb"/><path class="bpj4ctbvy"/><path class="lw4f_abbw"/><path class="x-yblppwf"/></g>`,
		"fallback": "streamline-cyber-color:pacman",
	});
}

export default Component;
