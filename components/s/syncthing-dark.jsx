import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0_o47byd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0_o47byd"/>`,
		"fallback": "selfhst:syncthing-dark",
	});
}

export default Component;
