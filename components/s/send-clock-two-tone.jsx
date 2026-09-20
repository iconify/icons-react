import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bu1ghwbvs.css';
import '../../css/u/u3r-okbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bu1ghwbvs"/><path class="u3r-okbav"/></g>`,
		"fallback": "keyline-icons:send-clock-two-tone",
	});
}

export default Component;
