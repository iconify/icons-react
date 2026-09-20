import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtk2x-umn.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtk2x-umn"/>`,
		"fallback": "lineicons:volume",
	});
}

export default Component;
