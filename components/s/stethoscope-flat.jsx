import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ozi5xcc9m.css';
import '../../css/i/ild8t4bxt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ozi5xcc9m"/><path class="ild8t4bxt"/></g>`,
		"fallback": "streamline-color:stethoscope-flat",
	});
}

export default Component;
