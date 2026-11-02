import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfzvn7btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfzvn7btc"/>`,
		"fallback": "mingcute:pot-fill",
	});
}

export default Component;
