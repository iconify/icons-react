import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a04ld8whi.css';
import '../../css/p/pd-c31btu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a04ld8whi"/><path class="pd-c31btu"/></g>`,
		"fallback": "lucide:parking-square-off",
	});
}

export default Component;
