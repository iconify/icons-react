import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exe13w66y.css';
import '../../css/e/edr0buecf.css';
import '../../css/o/o-n10pbew.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="exe13w66y"/><path class="edr0buecf"/><path class="o-n10pbew"/></g>`,
		"fallback": "streamline-color:peace-hand",
	});
}

export default Component;
