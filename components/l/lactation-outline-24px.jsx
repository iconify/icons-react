import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh74urp9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh74urp9j"/>`,
		"fallback": "healthicons:lactation-outline-24px",
	});
}

export default Component;
