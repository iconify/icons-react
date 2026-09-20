import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv62hbcmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv62hbcmk"/>`,
		"fallback": "si:more-vert-line",
	});
}

export default Component;
