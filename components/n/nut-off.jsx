import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hkypsfb6i.css';
import '../../css/y/ynigo1bzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hkypsfb6i"/><path class="ynigo1bzc"/></g>`,
		"fallback": "lucide:nut-off",
	});
}

export default Component;
