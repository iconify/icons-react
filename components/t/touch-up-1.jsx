import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwknwua8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwknwua8j"/>`,
		"fallback": "streamline-ultimate:touch-up-1",
	});
}

export default Component;
