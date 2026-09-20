import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9u5hk_ay.css';
import '../../css/e/eu62npp2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9u5hk_ay"/><path class="eu62npp2u"/>`,
		"fallback": "tdesign:tv-filled",
	});
}

export default Component;
