import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbnxg3b-j.css';
import '../../css/s/sxj-2bc0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbnxg3b-j wm-k"/><path class="sxj-2bc0x wm-a"/>`,
		"fallback": "withicons-bauhaus:map-pin",
	});
}

export default Component;
