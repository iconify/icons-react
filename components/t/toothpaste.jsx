import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvgxibc5v.css';
import '../../css/v/vpgoyob0i.css';
import '../../css/k/kgq6y_3vf.css';
import '../../css/g/gx5hekbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dvgxibc5v"/><path class="vpgoyob0i"/><ellipse transform="rotate(45 11.65 12.44)" class="kgq6y_3vf"/><path class="gx5hekbho"/></g>`,
		"fallback": "andrsrxn:toothpaste",
	});
}

export default Component;
