import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pppmzfbvj.css';
import '../../css/q/qcygdsdwa.css';
import '../../css/w/wlu-m-uzr.css';
import '../../css/w/w23s_eziw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pppmzfbvj"/><path class="qcygdsdwa"/><path class="wlu-m-uzr"/><path class="w23s_eziw"/></g>`,
		"fallback": "fluent-emoji-flat:shower",
	});
}

export default Component;
