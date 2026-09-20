import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkl4wyb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mkl4wyb4y"/>`,
		"fallback": "streamline-sharp-color:pen-draw-flat",
	});
}

export default Component;
