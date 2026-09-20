import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vz4uqvbnq.css';
import '../../css/o/otrjacbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vz4uqvbnq"/><path class="otrjacbmg"/></g>`,
		"fallback": "streamline-ultimate:router-signal",
	});
}

export default Component;
