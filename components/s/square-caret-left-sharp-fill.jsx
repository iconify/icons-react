import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztc6p5fos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ztc6p5fos"/>`,
		"fallback": "keyline-icons:square-caret-left-sharp-fill",
	});
}

export default Component;
