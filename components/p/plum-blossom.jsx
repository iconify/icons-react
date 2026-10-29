import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hjxvjzbmm.css';
import '../../css/a/a-ykpnb1v.css';
import '../../css/v/v5gb87bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hjxvjzbmm"/><path class="a-ykpnb1v wm-s"/><path class="v5gb87bbj wm-a"/></g>`,
		"fallback": "withicons:plum-blossom",
	});
}

export default Component;
