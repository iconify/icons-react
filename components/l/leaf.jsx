import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bhqdyi56e.css';
import '../../css/p/ph3pfsb3m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bhqdyi56e"/><path class="ph3pfsb3m"/></g>`,
		"fallback": "streamline:leaf",
	});
}

export default Component;
