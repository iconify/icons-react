import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za46jebxe.css';
import '../../css/x/xuohogbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za46jebxe"/><path class="xuohogbvc"/>`,
		"fallback": "si:user-alt-fill",
	});
}

export default Component;
