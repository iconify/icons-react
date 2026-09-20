import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unc2embyj.css';
import '../../css/u/uispwaboz.css';
import '../../css/i/iwunlbmzw.css';
import '../../css/v/v00gusbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="unc2embyj"><path class="uispwaboz"/><path class="iwunlbmzw"/><path class="v00gusbyh"/></g>`,
		"fallback": "lets-icons:trash-duotone-line",
	});
}

export default Component;
