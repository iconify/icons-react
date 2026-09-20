import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxil73bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxil73bdk"/>`,
		"fallback": "ri:printer-line",
	});
}

export default Component;
