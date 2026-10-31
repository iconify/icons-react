import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/c/c1zfbkbdz.css';
import '../../css/a/a233-fb1y.css';
import '../../css/m/m7qormcrk.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="c1zfbkbdz"/><path class="a233-fb1y"/><path class="m7qormcrk"/>`,
		"fallback": "tabler-flags:liberia",
	});
}

export default Component;
