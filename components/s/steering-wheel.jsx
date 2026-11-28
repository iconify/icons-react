import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/o/od9kuk6ie.css';
import '../../css/n/n6i_n2h8w.css';
import '../../css/l/l5ij1khxd.css';
import '../../css/g/gl47k-but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="od9kuk6ie"/><path class="n6i_n2h8w"/><path class="l5ij1khxd"/><path class="gl47k-but"/></g>`,
		"fallback": "iconaut:steering-wheel",
	});
}

export default Component;
