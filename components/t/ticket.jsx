import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/u/uvyahqobb.css';
import '../../css/t/tme94gjqp.css';
import '../../css/e/e4ufflyfi.css';
import '../../css/o/o21wcp09i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="uvyahqobb"/><path class="tme94gjqp"/><path class="e4ufflyfi"/><path class="o21wcp09i"/></g>`,
		"fallback": "icon-park:ticket",
	});
}

export default Component;
