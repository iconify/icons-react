import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/os9zofb_s.css';
import '../../css/n/nr8r42zbz.css';
import '../../css/d/dbtwze04d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="os9zofb_s"/><path class="nr8r42zbz"/><path class="dbtwze04d"/></g>`,
		"fallback": "streamline-ultimate:treasure-chest",
	});
}

export default Component;
