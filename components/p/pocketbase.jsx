import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnqhvtd5s.css';
import '../../css/k/k_ru2ibrc.css';
import '../../css/c/cusnesbxf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wnqhvtd5s"/><path class="k_ru2ibrc"/><path class="cusnesbxf"/></g>`,
		"fallback": "devicon:pocketbase",
	});
}

export default Component;
