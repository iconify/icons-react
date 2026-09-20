import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h29abmbpa.css';
import '../../css/i/iu_8x_b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h29abmbpa"/><path class="iu_8x_b1x"/>`,
		"fallback": "mingcute:toggle-right-2-line",
	});
}

export default Component;
