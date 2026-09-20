import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x6_8z3bmx.css';
import '../../css/k/krrrpj-8w.css';
import '../../css/u/upztnfbus.css';
import '../../css/p/pcwjrzb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x6_8z3bmx"/><path class="krrrpj-8w"/><path class="upztnfbus"/><path class="pcwjrzb4d"/></g>`,
		"fallback": "streamline-ultimate:walkman-headphones",
	});
}

export default Component;
