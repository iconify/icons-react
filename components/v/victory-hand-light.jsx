import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_hsb362n.css';
import '../../css/j/jfg_itbjp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x_hsb362n"/><path class="jfg_itbjp"/></g>`,
		"fallback": "fluent-emoji-flat:victory-hand-light",
	});
}

export default Component;
