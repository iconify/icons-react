import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xyxvqjafy.css';
import '../../css/e/evefg0bda.css';
import '../../css/p/phj2k4p3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xyxvqjafy"/><path class="evefg0bda"/><path class="phj2k4p3m"/></g>`,
		"fallback": "keyline-icons:mail-sparkles-two-tone",
	});
}

export default Component;
