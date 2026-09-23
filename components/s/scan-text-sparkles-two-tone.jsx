import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tlm7uzbdz.css';
import '../../css/f/ficd0abma.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/s/sy6ei_b0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tlm7uzbdz"/><path class="ficd0abma"/><path class="xon_9ib8a"/><path class="sy6ei_b0s"/></g>`,
		"fallback": "keyline-icons:scan-text-sparkles-two-tone",
	});
}

export default Component;
