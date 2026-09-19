import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tih2moo-v.css';
import '../../css/s/si8r2eb3x.css';
import '../../css/x/xloscho6w.css';
import '../../css/y/yjj99vb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tih2moo-v"/><path class="si8r2eb3x"/><path class="xloscho6w"/><path class="yjj99vb-a"/></g>`,
		"fallback": "hugeicons:structure-03",
	});
}

export default Component;
