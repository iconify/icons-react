import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjfuc-mne.css';
import '../../css/n/nozcax5vd.css';
import '../../css/g/gmb-oacwu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bjfuc-mne"/><path class="nozcax5vd"/><path class="gmb-oacwu"/></g>`,
		"fallback": "fluent-emoji-high-contrast:rabbit-face",
	});
}

export default Component;
