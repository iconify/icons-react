import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/og04bz4re.css';
import '../../css/t/tp8facqac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="og04bz4re"/><path class="tp8facqac"/></g>`,
		"fallback": "iconoir:transition-right",
	});
}

export default Component;
