import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9ms0wllv.css';
import '../../css/t/txxl_f0-v.css';
import '../../css/y/y7cusdbbp.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z9ms0wllv"/><path class="txxl_f0-v"/><path class="y7cusdbbp"/>`,
		"fallback": "lineicons:volume-high",
	});
}

export default Component;
