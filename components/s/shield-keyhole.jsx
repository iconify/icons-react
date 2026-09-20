import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shbpiipyk.css';
import '../../css/p/p3vlh0i5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="shbpiipyk"/><circle class="p3vlh0i5k"/></g>`,
		"fallback": "lucide:shield-keyhole",
	});
}

export default Component;
