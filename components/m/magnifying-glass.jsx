import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzdy0xb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzdy0xb7i"/>`,
		"fallback": "streamline-sharp:magnifying-glass",
	});
}

export default Component;
