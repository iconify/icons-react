import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfkacmblt.css';
import '../../css/q/qww1sgbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfkacmblt"/><path class="qww1sgbjq"/>`,
		"fallback": "boxicons:swatch",
	});
}

export default Component;
