import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiqjy_bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiqjy_bud"/>`,
		"fallback": "ri:space-ship-2-line",
	});
}

export default Component;
