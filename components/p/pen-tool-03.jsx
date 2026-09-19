import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qf2fswnqp.css';
import '../../css/k/kgjprcbqg.css';
import '../../css/a/aj4cwjb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qf2fswnqp"/><path class="kgjprcbqg"/><path class="aj4cwjb0c"/></g>`,
		"fallback": "hugeicons:pen-tool-03",
	});
}

export default Component;
