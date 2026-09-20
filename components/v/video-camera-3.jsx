import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/demtdab7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="demtdab7u"/>`,
		"fallback": "tdesign:video-camera-3",
	});
}

export default Component;
