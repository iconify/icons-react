import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk8z0l.css';
import '../../css/y/ydovum.css';
import '../../css/u/uu_2ij.css';
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
		"content": `<path class="uk8z0l ydovum"/><circle class="uu_2ij ydovum"/>`,
		"fallback": "line-md:switch-off-twotone",
	});
}

export default Component;
