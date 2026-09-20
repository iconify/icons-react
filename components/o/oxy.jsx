import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh9g1wbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kh9g1wbmk"/>`,
		"fallback": "token:oxy",
	});
}

export default Component;
