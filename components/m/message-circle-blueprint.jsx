import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z39zkobfw.css';
import '../../css/n/nfmhgjb_q.css';
import '../../css/j/jl_5gh53q.css';
import '../../css/m/md_gb3brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco z39zkobfw"/><path class="nfmhgjb_q wm-k"/><path class="jl_5gh53q wm-a"/><path class="md_gb3brr wm-k"/></g>`,
		"fallback": "withicons:message-circle-blueprint",
	});
}

export default Component;
