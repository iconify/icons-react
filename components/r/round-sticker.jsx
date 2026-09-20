import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/do50hmbvn.css';
import '../../css/t/trqow1bwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="do50hmbvn"/><path class="trqow1bwu"/></g>`,
		"fallback": "mage:round-sticker",
	});
}

export default Component;
