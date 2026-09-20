import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z2-v9_b3c.css';
import '../../css/m/m2kca79uk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z2-v9_b3c"/><path class="m2kca79uk"/></g>`,
		"fallback": "streamline:pen-3",
	});
}

export default Component;
