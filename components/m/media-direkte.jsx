import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5jfs-i_r.css';
import '../../css/f/f9qwu4cot.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n5jfs-i_r"/><path class="f9qwu4cot"/>`,
		"fallback": "nrk:media-direkte",
	});
}

export default Component;
