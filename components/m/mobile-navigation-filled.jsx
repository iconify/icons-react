import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iakl_ubig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iakl_ubig"/>`,
		"fallback": "tdesign:mobile-navigation-filled",
	});
}

export default Component;
