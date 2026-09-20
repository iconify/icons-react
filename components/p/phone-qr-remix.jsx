import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh_l-jx2r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fh_l-jx2r"/>`,
		"fallback": "streamline:phone-qr-remix",
	});
}

export default Component;
