import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swth-1bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swth-1bkl"/>`,
		"fallback": "tdesign:letters-s",
	});
}

export default Component;
