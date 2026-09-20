import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trlnbcbjf.css';
import '../../css/w/wie2-nbpn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trlnbcbjf"/><path class="wie2-nbpn"/>`,
		"fallback": "selfhst:lunasea",
	});
}

export default Component;
