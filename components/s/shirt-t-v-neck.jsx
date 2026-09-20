import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w6vzxc8tg.css';
import '../../css/j/js4r_ppcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w6vzxc8tg"/><path class="js4r_ppcw"/></g>`,
		"fallback": "lucide-lab:shirt-t-v-neck",
	});
}

export default Component;
