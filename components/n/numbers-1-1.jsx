import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu80dudss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu80dudss"/>`,
		"fallback": "tdesign:numbers-1-1",
	});
}

export default Component;
