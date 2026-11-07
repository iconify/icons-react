import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_i-7bb7z.css';
import '../../css/o/o3283cgee.css';
import '../../css/k/kjo9alciz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v_i-7bb7z"/><path class="o3283cgee"/><path class="kjo9alciz"/>`,
		"fallback": "solar:magnet-wave-outline",
	});
}

export default Component;
