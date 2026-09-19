import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbk-xc15w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbk-xc15w"/>`,
		"fallback": "hugeicons:rotate-right-06",
	});
}

export default Component;
