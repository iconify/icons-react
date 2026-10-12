import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq1rrzxbk.css';
import '../../css/y/yx-p2ubml.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq1rrzxbk"/><path class="yx-p2ubml"/>`,
		"fallback": "garden:text-color-fill-20",
	});
}

export default Component;
