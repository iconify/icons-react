import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv09d5sem.css';
import '../../css/g/gc0lb3cvd.css';
import '../../css/y/ytd8-zwcz.css';

const viewBox = {"width":456.8,"height":511.82,"left":27.6,"top":0.18};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dv09d5sem"><path class="gc0lb3cvd"/><path class="ytd8-zwcz"/></g>`,
		"fallback": "thesvg-color:jackett",
	});
}

export default Component;
