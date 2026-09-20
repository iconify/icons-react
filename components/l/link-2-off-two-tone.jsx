import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pa7_6bc8x.css';
import '../../css/a/ayo73pbzj.css';
import '../../css/n/n_31o8b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pa7_6bc8x"/><path class="ayo73pbzj"/><path class="n_31o8b2c"/></g>`,
		"fallback": "keyline-icons:link-2-off-two-tone",
	});
}

export default Component;
