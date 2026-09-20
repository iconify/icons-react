import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz5nuxbgv.css';
import '../../css/s/szs1rbc2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz5nuxbgv"/><path class="szs1rbc2k"/>`,
		"fallback": "selfhst:lemmy",
	});
}

export default Component;
