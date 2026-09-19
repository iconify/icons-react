import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhm1_nbdj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhm1_nbdj"/>`,
		"fallback": "game-icons:salt-shaker",
	});
}

export default Component;
