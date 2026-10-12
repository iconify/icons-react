import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbn2yrbjm.css';
import '../../css/v/v82trt5er.css';
import '../../css/w/wtr3z9boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbn2yrbjm"/><path clip-rule="evenodd" class="v82trt5er"/><path class="wtr3z9boz"/>`,
		"fallback": "lucide-extended:user-lock-filled",
	});
}

export default Component;
