import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjkypjour.css';
import '../../css/o/o8yi8xmwd.css';
import '../../css/n/n7o1mac_o.css';
import '../../css/p/p1p_pob7y.css';
import '../../css/p/p4azgeb-v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjkypjour"/><path class="o8yi8xmwd"/><path class="n7o1mac_o"/><path class="p1p_pob7y"/><path class="p4azgeb-v"/></g>`,
		"fallback": "fluent-emoji-flat:leopard",
	});
}

export default Component;
