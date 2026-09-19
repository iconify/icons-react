import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzcs35b4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzcs35b4b"/>`,
		"fallback": "hugeicons:two-finger-05",
	});
}

export default Component;
