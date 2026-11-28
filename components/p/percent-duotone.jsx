import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nt-eosxxx.css';
import '../../css/p/p-e-12bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nt-eosxxx secondary"/><path class="p-e-12bfu primary"/></g>`,
		"fallback": "iconaut:percent-duotone",
	});
}

export default Component;
