import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnd46w4ky.css';
import '../../css/v/vq6m2jkdl.css';
import '../../css/o/o9fj8l03y.css';
import '../../css/c/cjy_2dbqf.css';
import '../../css/l/lrzzm5bki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nnd46w4ky"><path class="vq6m2jkdl"/><path class="o9fj8l03y"/></g><g class="nnd46w4ky"><path class="cjy_2dbqf"/><path class="lrzzm5bki"/></g>`,
		"fallback": "flat-color-icons:refresh",
	});
}

export default Component;
