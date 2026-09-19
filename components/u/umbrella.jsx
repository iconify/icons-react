import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h-o32sb-w.css';
import '../../css/b/bo3ehacnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h-o32sb-w"/><path class="bo3ehacnj"/></g>`,
		"fallback": "iconoir:umbrella",
	});
}

export default Component;
