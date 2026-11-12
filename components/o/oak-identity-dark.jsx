import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3l_n81lx.css';
import '../../css/u/ubgppxb0h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3l_n81lx"/><path class="ubgppxb0h"/>`,
		"fallback": "selfhst:oak-identity-dark",
	});
}

export default Component;
