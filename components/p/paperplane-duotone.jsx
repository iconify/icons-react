import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr-5-vblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr-5-vblh"/>`,
		"fallback": "stash:paperplane-duotone",
	});
}

export default Component;
