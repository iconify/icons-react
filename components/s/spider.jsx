import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifruxfbhy.css';
import '../../css/u/ui23gybsc.css';
import '../../css/b/bh726_l3v.css';
import '../../css/l/lwvmlsb8x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ifruxfbhy"/><path class="ui23gybsc"/><path class="bh726_l3v"/><path class="lwvmlsb8x"/></g>`,
		"fallback": "fluent-emoji-high-contrast:spider",
	});
}

export default Component;
