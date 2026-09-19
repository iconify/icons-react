import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxrn8tbcm.css';
import '../../css/x/xue14cb9o.css';
import '../../css/u/u1b3xzbod.css';
import '../../css/d/dbogasj6j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxrn8tbcm"/><rect class="xue14cb9o"/><path class="u1b3xzbod"/><circle class="dbogasj6j"/>`,
		"fallback": "ion:print-outline",
	});
}

export default Component;
