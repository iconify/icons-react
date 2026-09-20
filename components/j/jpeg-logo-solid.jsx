import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo6wm__mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mo6wm__mp"/>`,
		"fallback": "streamline-logos:jpeg-logo-solid",
	});
}

export default Component;
