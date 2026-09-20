import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r10eajbbi.css';
import '../../css/z/z0mykrllt.css';
import '../../css/f/f6u8w3b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r10eajbbi"/><path class="z0mykrllt"/><rect class="f6u8w3b2h"/></g>`,
		"fallback": "mage:trophy-circle",
	});
}

export default Component;
