import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7defpb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7defpb8u"/>`,
		"fallback": "streamline-ultimate:subtract-circle-bold",
	});
}

export default Component;
