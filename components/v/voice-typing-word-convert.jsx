import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/old3t75yt.css';
import '../../css/p/p6l7h54do.css';
import '../../css/u/u8qxa4wqg.css';
import '../../css/s/sl3627r-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="old3t75yt"/><path class="p6l7h54do"/><path class="u8qxa4wqg"/><path class="sl3627r-y"/></g>`,
		"fallback": "streamline-sharp:voice-typing-word-convert",
	});
}

export default Component;
