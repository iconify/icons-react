import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bxau-3wrc.css';
import '../../css/i/idfm40zzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bxau-3wrc secondary"/><path class="idfm40zzg primary"/></g>`,
		"fallback": "iconaut:intersect-duotone",
	});
}

export default Component;
