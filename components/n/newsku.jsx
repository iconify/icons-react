import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkioc6b1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkioc6b1j"/>`,
		"fallback": "selfhst:newsku",
	});
}

export default Component;
