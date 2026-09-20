import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b_klw6bbu.css';
import '../../css/e/eod_h2pyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b_klw6bbu"/><path class="eod_h2pyj"/></g>`,
		"fallback": "mage:settings",
	});
}

export default Component;
