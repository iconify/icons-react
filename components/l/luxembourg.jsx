import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/f/f6faiabrk.css';
import '../../css/g/gqqnam_xe.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="f6faiabrk"/><path class="gqqnam_xe"/>`,
		"fallback": "tabler-flags:luxembourg",
	});
}

export default Component;
