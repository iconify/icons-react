import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eawq5hbcr.css';
import '../../css/j/j27il7k2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eawq5hbcr"/><rect class="j27il7k2r"/></g>`,
		"fallback": "mage:star-circle",
	});
}

export default Component;
