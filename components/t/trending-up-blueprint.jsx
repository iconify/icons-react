import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/eazxt60nh.css';
import '../../css/f/frhqtptbh.css';
import '../../css/m/mo03jbcfd.css';
import '../../css/h/h5k7meb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="eazxt60nh wm-deco"/><path class="frhqtptbh wm-deco"/><path class="mo03jbcfd"/><path class="h5k7meb4f"/></g>`,
		"fallback": "withicons:trending-up-blueprint",
	});
}

export default Component;
