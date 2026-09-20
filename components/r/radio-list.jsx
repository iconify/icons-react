import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnsc5ccym.css';
import '../../css/s/su3kdjb3z.css';
import '../../css/b/b74ikwezj.css';
import '../../css/q/qtas4abwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hnsc5ccym"/><circle class="su3kdjb3z"/><circle class="su3kdjb3z"/><circle class="b74ikwezj"/><circle class="qtas4abwh"/></g>`,
		"fallback": "majesticons:radio-list",
	});
}

export default Component;
