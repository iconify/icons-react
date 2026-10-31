import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/d/dkr5qebiv.css';
import '../../css/p/pb_xy5vyx.css';
import '../../css/d/dohuy7b_l.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="dkr5qebiv"/><path class="pb_xy5vyx"/><path class="dohuy7b_l"/>`,
		"fallback": "tabler-flags:united-states",
	});
}

export default Component;
