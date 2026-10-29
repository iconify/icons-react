import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/h/hilcyx-vi.css';
import '../../css/o/oqe4n1oax.css';
import '../../css/j/jr929vbvi.css';
import '../../css/u/uk7ndnb4g.css';
import '../../css/w/wi43dxb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="hilcyx-vi"/><path class="oqe4n1oax"/><path class="jr929vbvi wm-shine"/><path class="uk7ndnb4g wm-deco"/><path class="wi43dxb3d wm-deco"/></g>`,
		"fallback": "withicons-sticker:panel-left-close",
	});
}

export default Component;
