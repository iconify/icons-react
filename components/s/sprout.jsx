import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d1rj82n1h.css';
import '../../css/c/cwon-_b3j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d1rj82n1h"/><path class="cwon-_b3j"/></g>`,
		"fallback": "streamline:sprout",
	});
}

export default Component;
