import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykg_7cotr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykg_7cotr"/>`,
		"fallback": "boxicons:save",
	});
}

export default Component;
