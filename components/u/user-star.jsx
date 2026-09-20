import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nk6kq8uxx.css';
import '../../css/g/ghya2pbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nk6kq8uxx"/><circle class="ghya2pbow"/></g>`,
		"fallback": "lucide:user-star",
	});
}

export default Component;
