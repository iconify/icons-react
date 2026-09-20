import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/de2zti8vg.css';
import '../../css/x/xu1251juh.css';
import '../../css/h/hieh39bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="de2zti8vg"/><circle class="xu1251juh"/><path class="hieh39bht"/></g>`,
		"fallback": "lucide:medal",
	});
}

export default Component;
