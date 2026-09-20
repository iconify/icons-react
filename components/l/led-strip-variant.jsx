import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzob4b76j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzob4b76j"/>`,
		"fallback": "mdi:led-strip-variant",
	});
}

export default Component;
