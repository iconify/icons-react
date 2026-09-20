import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h3ocu4b7o.css';
import '../../css/k/ky72zibxh.css';
import '../../css/f/fp29wpb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h3ocu4b7o"/><path class="ky72zibxh"/><circle class="fp29wpb_a"/></g>`,
		"fallback": "lucide:mic-2",
	});
}

export default Component;
