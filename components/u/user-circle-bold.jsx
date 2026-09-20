import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgovipzxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wgovipzxw"/>`,
		"fallback": "solar:user-circle-bold",
	});
}

export default Component;
