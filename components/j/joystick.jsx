import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/czwy6vbnw.css';
import '../../css/o/o2dceybsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="czwy6vbnw"/><circle class="o2dceybsa"/></g>`,
		"fallback": "lucide:joystick",
	});
}

export default Component;
