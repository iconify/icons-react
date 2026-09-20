import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/z/zgm_bpfcd.css';
import '../../css/u/u-18-47nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="zgm_bpfcd"/><path class="u-18-47nx"/></g>`,
		"fallback": "streamline-ultimate:small-office-briefcase",
	});
}

export default Component;
