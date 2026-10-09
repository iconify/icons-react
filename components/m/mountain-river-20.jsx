import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oruybqb1x.css';
import '../../css/z/z4r98tbta.css';
import '../../css/z/z88o7-bai.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oruybqb1x"/><path class="z4r98tbta"/><path class="z88o7-bai"/>`,
		"fallback": "energy-icons:mountain-river-20",
	});
}

export default Component;
