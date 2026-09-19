import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt7zdbbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt7zdbbiu"/>`,
		"fallback": "boxicons:swatch-filled",
	});
}

export default Component;
