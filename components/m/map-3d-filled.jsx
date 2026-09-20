import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ron-o7_wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ron-o7_wj"/>`,
		"fallback": "tdesign:map-3d-filled",
	});
}

export default Component;
