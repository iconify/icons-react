import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6p_0fbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s6p_0fbmr"/>`,
		"fallback": "streamline-logos:niconico-logo-1-block",
	});
}

export default Component;
