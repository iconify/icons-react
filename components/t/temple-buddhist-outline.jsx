import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fae2gzrzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fae2gzrzv"/>`,
		"fallback": "mdi:temple-buddhist-outline",
	});
}

export default Component;
