import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y1zn9zwza.css';
import '../../css/o/oyjg--ejj.css';
import '../../css/t/t5xh3is5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y1zn9zwza"/><circle class="oyjg--ejj"/><path class="t5xh3is5k"/></g>`,
		"fallback": "hugeicons:monitor-dot",
	});
}

export default Component;
