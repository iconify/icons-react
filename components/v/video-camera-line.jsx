import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njzu_tb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njzu_tb_l"/>`,
		"fallback": "mingcute:video-camera-line",
	});
}

export default Component;
