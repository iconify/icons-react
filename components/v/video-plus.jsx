import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo4op33kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo4op33kl"/>`,
		"fallback": "noviair-light:video-plus",
	});
}

export default Component;
