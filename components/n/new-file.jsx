import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jpj9swb1e.css';
import '../../css/q/q4avfgb6r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jpj9swb1e"/><path class="q4avfgb6r"/></g>`,
		"fallback": "streamline:new-file",
	});
}

export default Component;
