import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8p4k7b8x.css';
import '../../css/o/o2gadtdnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8p4k7b8x"/><path class="o2gadtdnr"/>`,
		"fallback": "bxl:midjourney",
	});
}

export default Component;
