import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkacgwkry.css';
import '../../css/g/gilleue9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkacgwkry"/><path class="gilleue9t"/>`,
		"fallback": "streamline-ultimate:shop-like-bold",
	});
}

export default Component;
