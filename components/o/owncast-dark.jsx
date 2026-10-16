import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir2n3xb_u.css';

const viewBox = {"width":96,"height":105};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir2n3xb_u"/>`,
		"fallback": "thesvg-color:owncast-dark",
	});
}

export default Component;
