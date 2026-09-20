import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwv97dxrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwv97dxrv"/>`,
		"fallback": "uil:plug",
	});
}

export default Component;
