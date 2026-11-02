import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrcs06bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrcs06bmf"/>`,
		"fallback": "mingcute:low-temperature-line",
	});
}

export default Component;
