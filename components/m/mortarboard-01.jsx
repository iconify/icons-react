import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xy2ch-bib.css';
import '../../css/r/rx0twx8ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xy2ch-bib"/><path class="rx0twx8ej"/></g>`,
		"fallback": "hugeicons:mortarboard-01",
	});
}

export default Component;
