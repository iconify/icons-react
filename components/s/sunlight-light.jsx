import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/p/pt04u-aen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="aqhok2bbj"/><path class="pt04u-aen"/></g>`,
		"fallback": "lets-icons:sunlight-light",
	});
}

export default Component;
