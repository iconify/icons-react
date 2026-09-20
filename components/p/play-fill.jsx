import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zofvscc2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zofvscc2t"/>`,
		"fallback": "keyline-icons:play-fill",
	});
}

export default Component;
