import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg7dfsboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hg7dfsboe"/>`,
		"fallback": "solar:playlist-minimalistic-2-outline",
	});
}

export default Component;
