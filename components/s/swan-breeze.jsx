import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocr_1acml.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocr_1acml"/>`,
		"fallback": "game-icons:swan-breeze",
	});
}

export default Component;
