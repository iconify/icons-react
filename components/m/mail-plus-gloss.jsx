import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s8kdqjcwh.css';
import '../../css/k/k9t_m67xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="s8kdqjcwh wm-k"/><path class="k9t_m67xz wm-s"/></g>`,
		"fallback": "withicons:mail-plus-gloss",
	});
}

export default Component;
