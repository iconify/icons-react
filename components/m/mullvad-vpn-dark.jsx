import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nae4m6bdg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nae4m6bdg"/>`,
		"fallback": "selfhst:mullvad-vpn-dark",
	});
}

export default Component;
