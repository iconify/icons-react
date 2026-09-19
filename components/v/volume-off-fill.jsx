import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko_c4j18e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ko_c4j18e"/>`,
		"fallback": "iconamoon:volume-off-fill",
	});
}

export default Component;
