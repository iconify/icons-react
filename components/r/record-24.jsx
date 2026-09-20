import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy5y0nbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy5y0nbhg"/>`,
		"fallback": "qlementine-icons:record-24",
	});
}

export default Component;
