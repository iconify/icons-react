import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebwprabbp.css';
import '../../css/o/ouj0i7wlf.css';
import '../../css/f/f-uqvvbcb.css';
import '../../css/p/pp3u-tenb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ebwprabbp"/><path class="ouj0i7wlf"/><path class="f-uqvvbcb"/><path class="pp3u-tenb"/></g>`,
		"fallback": "streamline-flex-color:phone-shield",
	});
}

export default Component;
