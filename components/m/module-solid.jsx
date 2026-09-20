import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdqr4db0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vdqr4db0b"/>`,
		"fallback": "streamline-sharp:module-solid",
	});
}

export default Component;
