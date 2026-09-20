import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjwqrtb-a.css';
import '../../css/e/e4du2zpbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjwqrtb-a"/><path class="e4du2zpbl"/>`,
		"fallback": "selfhst:privadovpn",
	});
}

export default Component;
