import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rovboe1ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rovboe1ee"/>`,
		"fallback": "streamline-cyber:travel-bag-2",
	});
}

export default Component;
