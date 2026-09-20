import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xy5orubro.css';
import '../../css/z/zg_6xseou.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xy5orubro"/><path class="zg_6xseou"/></g>`,
		"fallback": "streamline-flex-color:keyboard-option-setting-gear-flat",
	});
}

export default Component;
