import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h40b46bld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h40b46bld"/>`,
		"fallback": "tdesign:move-1",
	});
}

export default Component;
