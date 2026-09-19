import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z-lw6rbxb.css';
import '../../css/u/u9ousftuv.css';
import '../../css/p/p-psffbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z-lw6rbxb"/><path class="u9ousftuv"/><path class="p-psffbzw"/></g>`,
		"fallback": "hugeicons:tools",
	});
}

export default Component;
