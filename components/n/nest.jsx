import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzlfy1tml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzlfy1tml"/>`,
		"fallback": "token:nest",
	});
}

export default Component;
