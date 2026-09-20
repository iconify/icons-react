import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-sfxobwe.css';
import '../../css/t/tg-9ed7zj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-sfxobwe"/><path class="tg-9ed7zj"/>`,
		"fallback": "selfhst:proton-vpn-light",
	});
}

export default Component;
