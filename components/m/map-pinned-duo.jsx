import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_bc48bit.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vjf2x3b9w.css';
import '../../css/j/jxeobwgmm.css';
import '../../css/a/ahzs3cris.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_bc48bit secondary"/><g class="dt0cm9dhy primary"><path class="vjf2x3b9w"/><path class="jxeobwgmm"/><path class="ahzs3cris"/></g>`,
		"fallback": "iconaut:map-pinned-duo",
	});
}

export default Component;
