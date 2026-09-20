import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk8z0l.css';
import '../../css/y/ydovum.css';
import '../../css/p/pde8iy.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk8z0l ydovum"/><circle class="pde8iy ydovum"/>`,
		"fallback": "line-md:switch-twotone",
	});
}

export default Component;
