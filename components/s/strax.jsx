import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rny0350zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rny0350zi"/>`,
		"fallback": "token:strax",
	});
}

export default Component;
