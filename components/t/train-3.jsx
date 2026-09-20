import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqxfm3x3o.css';
import '../../css/r/rwuxsc6cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqxfm3x3o"/><path class="rwuxsc6cx"/>`,
		"fallback": "lineicons:train-3",
	});
}

export default Component;
