import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imgt25i8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imgt25i8p"/>`,
		"fallback": "selfhst:rancher-rke-dark",
	});
}

export default Component;
