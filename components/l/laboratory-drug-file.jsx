import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b2mhy_8hj.css';
import '../../css/j/jnb6jc3hh.css';
import '../../css/b/bqo_ht36p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b2mhy_8hj"/><path class="jnb6jc3hh"/><path class="bqo_ht36p"/></g>`,
		"fallback": "streamline-ultimate:laboratory-drug-file",
	});
}

export default Component;
