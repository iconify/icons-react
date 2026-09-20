import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dzgli20pz.css';
import '../../css/e/el85fgywn.css';
import '../../css/o/oootjbbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><ellipse class="dzgli20pz"/><ellipse class="el85fgywn"/><path class="oootjbbym"/></g>`,
		"fallback": "lucide-lab:toilet-roll",
	});
}

export default Component;
