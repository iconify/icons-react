import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqto7nzoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqto7nzoz"/>`,
		"fallback": "coolicons:line-height-fill-round",
	});
}

export default Component;
