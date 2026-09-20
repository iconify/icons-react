import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7howccji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7howccji"/>`,
		"fallback": "selfhst:neodb-dark",
	});
}

export default Component;
