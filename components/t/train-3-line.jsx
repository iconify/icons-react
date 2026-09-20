import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkr0r0bta.css';
import '../../css/q/qw6hk3bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkr0r0bta"/><path class="qw6hk3bxg"/>`,
		"fallback": "mingcute:train-3-line",
	});
}

export default Component;
