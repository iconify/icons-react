import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s340dhbaz.css';
import '../../css/f/fr5_r8b7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s340dhbaz"/><path class="fr5_r8b7r"/>`,
		"fallback": "selfhst:proton-vpn-dark",
	});
}

export default Component;
