import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eqquj7bkg.css';
import '../../css/g/gi4z11bdi.css';
import '../../css/i/icynqdbqy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eqquj7bkg"/><path class="gi4z11bdi"/><path class="icynqdbqy"/></g>`,
		"fallback": "healthicons:spleen-outline",
	});
}

export default Component;
