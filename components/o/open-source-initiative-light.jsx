import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg5_eab7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg5_eab7x"/>`,
		"fallback": "selfhst:open-source-initiative-light",
	});
}

export default Component;
