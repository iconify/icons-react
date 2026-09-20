import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eao9lubei.css';
import '../../css/b/ba5davbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eao9lubei"/><path class="ba5davbsb"/></g>`,
		"fallback": "mynaui:select-multiple",
	});
}

export default Component;
