import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flvxn2zzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flvxn2zzh"/>`,
		"fallback": "keyline-icons:rewind-fill",
	});
}

export default Component;
