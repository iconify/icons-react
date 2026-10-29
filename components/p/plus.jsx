import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lrn23cnqw.css';
import '../../css/y/yg12610jv.css';
import '../../css/m/myuxcznyu.css';
import '../../css/w/wqkaw1p0w.css';
import '../../css/u/uyd6qvy3o.css';
import '../../css/a/aj1r45djd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="lrn23cnqw wm-shadow"/><path class="yg12610jv"/><path class="myuxcznyu"/><path class="wqkaw1p0w"/><path class="uyd6qvy3o wm-shine"/><path class="aj1r45djd wm-deco"/></g>`,
		"fallback": "withicons-sticker:plus",
	});
}

export default Component;
