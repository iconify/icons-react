import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sy8ledbqv.css';
import '../../css/w/w4v25voyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="sy8ledbqv"/><path class="w4v25voyy"/></g>`,
		"fallback": "lucide-lab:locate-square",
	});
}

export default Component;
