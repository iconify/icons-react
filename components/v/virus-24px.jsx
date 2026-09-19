import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncnv5zbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ncnv5zbty"/>`,
		"fallback": "healthicons:virus-24px",
	});
}

export default Component;
