import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed40phbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed40phbcv"/>`,
		"fallback": "mage:music-fill",
	});
}

export default Component;
