import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r4kvuacrx.css';
import '../../css/o/oyjg--ejj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r4kvuacrx"/><circle class="oyjg--ejj"/></g>`,
		"fallback": "lucide:message-square-dot",
	});
}

export default Component;
