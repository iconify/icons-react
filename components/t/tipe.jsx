import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndc5i5bkd.css';

const viewBox = {"width":331,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndc5i5bkd"/>`,
		"fallback": "file-icons:tipe",
	});
}

export default Component;
