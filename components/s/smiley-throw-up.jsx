import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k6zes8b5k.css';
import '../../css/s/smo-ykbbl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k6zes8b5k"/><path class="smo-ykbbl"/></g>`,
		"fallback": "streamline:smiley-throw-up",
	});
}

export default Component;
