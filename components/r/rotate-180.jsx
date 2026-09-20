import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfqvy5bci.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfqvy5bci"/>`,
		"fallback": "ix:rotate-180",
	});
}

export default Component;
