import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/g/ghehktzfo.css';
import '../../css/s/s-cndd1cg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="ghehktzfo"/><path class="s-cndd1cg"/></g>`,
		"fallback": "streamline-kameleon-color:pointer-pop",
	});
}

export default Component;
