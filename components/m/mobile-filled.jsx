import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll1p07brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll1p07brz"/>`,
		"fallback": "tdesign:mobile-filled",
	});
}

export default Component;
