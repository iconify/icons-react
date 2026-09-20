import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/azffq-zck.css';
import '../../css/a/axwbscqba.css';
import '../../css/y/yo9vw7b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="azffq-zck"/><circle class="axwbscqba"/><path class="yo9vw7b0v"/></g>`,
		"fallback": "lucide-lab:slot-disc",
	});
}

export default Component;
