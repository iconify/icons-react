import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kobh7onux.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ij3vyybgh.css';
import '../../css/c/cir9yb4sp.css';
import '../../css/b/b38cyebvi.css';
import '../../css/n/nor6gcvgk.css';
import '../../css/w/wzsfntb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kobh7onux secondary"/><g class="dt0cm9dhy primary"><path class="ij3vyybgh"/><path class="cir9yb4sp"/><path class="b38cyebvi"/><path class="nor6gcvgk"/><path class="wzsfntb5d"/></g>`,
		"fallback": "iconaut:truck-duo",
	});
}

export default Component;
