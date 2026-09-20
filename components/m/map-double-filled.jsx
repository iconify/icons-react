import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe-bdwhdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe-bdwhdn"/>`,
		"fallback": "tdesign:map-double-filled",
	});
}

export default Component;
