import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_ieiz18n.css';
import '../../css/d/d5xclqbor.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_ieiz18n"/><path class="d5xclqbor"/>`,
		"fallback": "selfhst:syncloud",
	});
}

export default Component;
