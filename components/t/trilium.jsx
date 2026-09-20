import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewzfa94-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewzfa94-w"/>`,
		"fallback": "thesvg-color:trilium",
	});
}

export default Component;
