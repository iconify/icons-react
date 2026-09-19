import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qza-7dbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qza-7dbhi"/>`,
		"fallback": "hugeicons:unsplash",
	});
}

export default Component;
