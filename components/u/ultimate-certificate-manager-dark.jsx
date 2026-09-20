import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk7iwbbts.css';
import '../../css/l/lprgm5wxz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk7iwbbts"/><path class="lprgm5wxz"/>`,
		"fallback": "selfhst:ultimate-certificate-manager-dark",
	});
}

export default Component;
