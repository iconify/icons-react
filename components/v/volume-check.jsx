import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tslo0dblv.css';
import '../../css/e/eqh9zbbsl.css';
import '../../css/f/fvc-4gi-m.css';
import '../../css/a/ad2ovvbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tslo0dblv"/><path class="eqh9zbbsl"/><path class="fvc-4gi-m"/><path class="ad2ovvbnb"/></g>`,
		"fallback": "streamline-cyber-color:volume-check",
	});
}

export default Component;
