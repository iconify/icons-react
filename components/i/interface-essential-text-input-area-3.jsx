import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu-67tbwi.css';
import '../../css/i/i5_v47u8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu-67tbwi"/><path class="i5_v47u8g"/>`,
		"fallback": "streamline-pixel:interface-essential-text-input-area-3",
	});
}

export default Component;
