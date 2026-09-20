import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsll_2ggj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsll_2ggj"/>`,
		"fallback": "mdi:printer-magnify",
	});
}

export default Component;
