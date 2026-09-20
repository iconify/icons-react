import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5212tb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m5212tb-k"/>`,
		"fallback": "nrk:media-direktetv-active",
	});
}

export default Component;
