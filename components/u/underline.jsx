import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h-pfqgbzl.css';
import '../../css/d/dc6exx_io.css';
import '../../css/q/q3nrevbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="h-pfqgbzl wm-k"/><path class="dc6exx_io wm-a"/><path class="q3nrevbfj wm-deco"/></g>`,
		"fallback": "withicons-kawaii:underline",
	});
}

export default Component;
