import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/l/lwy3kjbdk.css';
import '../../css/n/nmur6okjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="lwy3kjbdk"/><circle class="nmur6okjy"/></g>`,
		"fallback": "lets-icons:lable",
	});
}

export default Component;
