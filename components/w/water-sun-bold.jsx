import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dth18jb_c.css';
import '../../css/b/bx1khacep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dth18jb_c"/><path class="bx1khacep"/>`,
		"fallback": "solar:water-sun-bold",
	});
}

export default Component;
