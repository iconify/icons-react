import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqpdhibjf.css';
import '../../css/t/tv5lj1k2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqpdhibjf"/><path class="tv5lj1k2o"/></g>`,
		"fallback": "keyline-icons:usb-two-tone",
	});
}

export default Component;
