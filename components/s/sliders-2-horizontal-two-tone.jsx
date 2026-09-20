import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ooaievbhz.css';
import '../../css/n/nrkjs8b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ooaievbhz"/><path class="nrkjs8b5n"/></g>`,
		"fallback": "keyline-icons:sliders-2-horizontal-two-tone",
	});
}

export default Component;
