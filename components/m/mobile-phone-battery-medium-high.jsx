import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjdjvdv9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjdjvdv9p"/>`,
		"fallback": "streamline-cyber:mobile-phone-battery-medium-high",
	});
}

export default Component;
