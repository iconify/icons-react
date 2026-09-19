import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4902cctb.css';
import '../../css/z/zsrvcc45r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w4902cctb"/><path class="zsrvcc45r"/></g>`,
		"fallback": "fluent-emoji-flat:sos-button",
	});
}

export default Component;
