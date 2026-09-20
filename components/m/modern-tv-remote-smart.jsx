import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ojwneybih.css';
import '../../css/f/fxoem8brg.css';
import '../../css/r/rqj9erb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ojwneybih"/><path class="fxoem8brg"/><path class="rqj9erb8o"/></g>`,
		"fallback": "streamline-ultimate:modern-tv-remote-smart",
	});
}

export default Component;
