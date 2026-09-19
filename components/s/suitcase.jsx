import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcsms5bht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcsms5bht"/>`,
		"fallback": "fa6-solid:suitcase",
	});
}

export default Component;
