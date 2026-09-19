import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qnnxl6bvc.css';
import '../../css/r/ray9_ac3o.css';
import '../../css/h/h_267dbvz.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qnnxl6bvc"/><path class="ray9_ac3o"/><path class="h_267dbvz"/></g>`,
		"fallback": "flagpack:it",
	});
}

export default Component;
