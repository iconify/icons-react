import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9sfiacif.css';
import '../../css/p/p2ydg9bpk.css';
import '../../css/s/sbxg6bciy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a9sfiacif"/><path class="p2ydg9bpk"/><path class="sbxg6bciy"/></g>`,
		"fallback": "streamline-cyber-color:travel-bag-2",
	});
}

export default Component;
