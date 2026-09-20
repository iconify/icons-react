import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxgkljb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sxgkljb-e"/>`,
		"fallback": "streamline-sharp:theater-mask-remix",
	});
}

export default Component;
