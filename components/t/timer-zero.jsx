import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgk3-tb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgk3-tb6i"/>`,
		"fallback": "streamline-sharp-color:timer-zero",
	});
}

export default Component;
