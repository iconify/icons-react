import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcuv1qq0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcuv1qq0x"/>`,
		"fallback": "file-icons:latino",
	});
}

export default Component;
