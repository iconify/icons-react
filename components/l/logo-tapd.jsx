import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk9pi6bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk9pi6bkw"/>`,
		"fallback": "tdesign:logo-tapd",
	});
}

export default Component;
