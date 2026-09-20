import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7kxfxctq.css';
import '../../css/d/du9sb8bhq.css';
import '../../css/v/vft_s4bok.css';
import '../../css/f/f-libdcom.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r7kxfxctq"/><path class="du9sb8bhq"/><path class="vft_s4bok"/><path class="f-libdcom"/></g>`,
		"fallback": "streamline-color:pathfinder-trim",
	});
}

export default Component;
