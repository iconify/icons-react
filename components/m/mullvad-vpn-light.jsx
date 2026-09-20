import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfiv3z6qi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfiv3z6qi"/>`,
		"fallback": "selfhst:mullvad-vpn-light",
	});
}

export default Component;
