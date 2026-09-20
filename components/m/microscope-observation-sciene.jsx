import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vvo_4lblf.css';
import '../../css/g/gxnd-ryzh.css';
import '../../css/i/iphl04buv.css';
import '../../css/v/vlgnrqtjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vvo_4lblf"/><path class="gxnd-ryzh"/><path class="iphl04buv"/><path class="vlgnrqtjr"/></g>`,
		"fallback": "streamline-sharp:microscope-observation-sciene",
	});
}

export default Component;
