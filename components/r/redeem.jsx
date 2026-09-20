import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygfg23b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygfg23b1u"/>`,
		"fallback": "mdi:redeem",
	});
}

export default Component;
