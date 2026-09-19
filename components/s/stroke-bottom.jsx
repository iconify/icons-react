import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfbh3cbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfbh3cbiq"/>`,
		"fallback": "hugeicons:stroke-bottom",
	});
}

export default Component;
