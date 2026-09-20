import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2nfunb6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2nfunb6z"/>`,
		"fallback": "ix:line-cap-round",
	});
}

export default Component;
