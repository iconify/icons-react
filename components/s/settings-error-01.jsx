import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cc0yg-bhd.css';
import '../../css/j/jy51gjgdv.css';
import '../../css/l/ly3xvooyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cc0yg-bhd"/><path class="jy51gjgdv"/><path class="ly3xvooyq"/></g>`,
		"fallback": "hugeicons:settings-error-01",
	});
}

export default Component;
