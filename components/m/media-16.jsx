import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj2y_opli.css';
import '../../css/k/klmk3-lhy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wj2y_opli"/><path clip-rule="evenodd" class="klmk3-lhy"/>`,
		"fallback": "qlementine-icons:media-16",
	});
}

export default Component;
