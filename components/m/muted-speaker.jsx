import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywzbdgbaq.css';
import '../../css/q/qlo_m833a.css';
import '../../css/r/r3i12rbyf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ywzbdgbaq"/><path class="qlo_m833a"/><path class="r3i12rbyf"/></g>`,
		"fallback": "fluent-emoji-flat:muted-speaker",
	});
}

export default Component;
