import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/i1ujbstus.css';
import '../../css/b/bqa76j3gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="i1ujbstus"/><path class="bqa76j3gp"/></g>`,
		"fallback": "streamline-cyber:traffic-light",
	});
}

export default Component;
