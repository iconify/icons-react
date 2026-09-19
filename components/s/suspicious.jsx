import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxf_ij_3n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxf_ij_3n"/>`,
		"fallback": "game-icons:suspicious",
	});
}

export default Component;
