import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgfd5rbjk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgfd5rbjk"/>`,
		"fallback": "selfhst:openspeedtest-dark",
	});
}

export default Component;
