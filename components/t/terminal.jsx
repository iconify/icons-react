import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qavvhzbqa.css';
import '../../css/v/vkgg09bpx.css';
import '../../css/e/euj49csjz.css';
import '../../css/h/h4luupb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qavvhzbqa"/><path class="vkgg09bpx wm-shine"/><path class="euj49csjz wm-k"/><path class="h4luupb7n wm-a"/></g>`,
		"fallback": "withicons-kawaii:terminal",
	});
}

export default Component;
