import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/w/wzs6vebfd.css';
import '../../css/c/c264sdboh.css';
import '../../css/k/k3lungbac.css';
import '../../css/q/q0162te-o.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="wzs6vebfd"/><path class="c264sdboh"/><path class="k3lungbac"/><path class="q0162te-o"/></g>`,
		"fallback": "streamline-stickies-color:slate",
	});
}

export default Component;
