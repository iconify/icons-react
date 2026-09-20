import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt64sdmmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt64sdmmv"/>`,
		"fallback": "streamline-sharp:like-1",
	});
}

export default Component;
