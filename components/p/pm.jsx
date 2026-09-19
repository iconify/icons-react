import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qnnxl6bvc.css';
import '../../css/p/pu5v9vwih.css';
import '../../css/p/pmz80t_au.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qnnxl6bvc"/><path class="pu5v9vwih"/><path class="pmz80t_au"/></g>`,
		"fallback": "flagpack:pm",
	});
}

export default Component;
