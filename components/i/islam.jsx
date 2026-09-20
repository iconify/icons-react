import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jai3nubgf.css';
import '../../css/e/e1bpnsb5o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jai3nubgf"/><path class="e1bpnsb5o"/></g>`,
		"fallback": "streamline:islam",
	});
}

export default Component;
