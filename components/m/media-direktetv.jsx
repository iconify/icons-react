import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx13v7buv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hx13v7buv"/>`,
		"fallback": "nrk:media-direktetv",
	});
}

export default Component;
