import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-rc11bkf.css';
import '../../css/a/aaaqik-js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s-rc11bkf"/><path class="aaaqik-js"/></g>`,
		"fallback": "keyline-icons:square-dashed-half-two-tone",
	});
}

export default Component;
