import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnhl-5bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tnhl-5bip"/>`,
		"fallback": "token:radio",
	});
}

export default Component;
