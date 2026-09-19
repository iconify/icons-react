import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1_nssb1l.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1_nssb1l"/>`,
		"fallback": "fa6-solid:share-from-square",
	});
}

export default Component;
