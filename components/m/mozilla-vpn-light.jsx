import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl298fbpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl298fbpc"/>`,
		"fallback": "selfhst:mozilla-vpn-light",
	});
}

export default Component;
