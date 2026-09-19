import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yre9_ib2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yre9_ib2k"/>`,
		"fallback": "file-icons:progress-old",
	});
}

export default Component;
