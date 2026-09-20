import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k4p5qqb4u.css';
import '../../css/s/s_joph9qy.css';
import '../../css/m/mrmwl73_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k4p5qqb4u"/><path class="s_joph9qy"/><path class="mrmwl73_s"/></g>`,
		"fallback": "lucide:rat",
	});
}

export default Component;
