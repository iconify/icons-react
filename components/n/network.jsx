import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/feh9g0bqf.css';
import '../../css/p/pvotryzei.css';
import '../../css/k/k41zy7q4s.css';
import '../../css/e/en34xy1yh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="feh9g0bqf"/><rect class="pvotryzei"/><rect class="k41zy7q4s"/><path class="en34xy1yh"/></g>`,
		"fallback": "lucide:network",
	});
}

export default Component;
