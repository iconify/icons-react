import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubu5r13hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubu5r13hz"/>`,
		"fallback": "healthicons:video-24px",
	});
}

export default Component;
