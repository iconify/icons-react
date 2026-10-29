import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4v3t5b9z.css';
import '../../css/s/swk89qbix.css';
import '../../css/i/i1l2chbjc.css';
import '../../css/c/casbilbvn.css';
import '../../css/g/gsf-f8bom.css';
import '../../css/c/cubcsm-se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s4v3t5b9z wm-k"/><path class="swk89qbix wm-k"/><path class="i1l2chbjc wm-k"/><path class="casbilbvn wm-shine"/><path class="gsf-f8bom wm-a"/><path class="cubcsm-se wm-a"/></g>`,
		"fallback": "withicons-anime:move",
	});
}

export default Component;
