import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vqwzm--dk.css';
import '../../css/j/jhedrgtgd.css';
import '../../css/a/add3vybaj.css';
import '../../css/s/sg2ufph9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vqwzm--dk"/><path class="jhedrgtgd"/><path class="add3vybaj"/><path class="sg2ufph9x"/></g>`,
		"fallback": "solar:trash-bin-minimalistic-bold-duotone",
	});
}

export default Component;
