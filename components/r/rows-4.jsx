import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fnzuxjcax.css';
import '../../css/u/u4sxwwy9k.css';
import '../../css/b/bum_z6bnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fnzuxjcax"/><path class="u4sxwwy9k"/><path class="bum_z6bnu"/></g>`,
		"fallback": "hugeicons:rows-4",
	});
}

export default Component;
