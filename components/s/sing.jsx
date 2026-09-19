import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzx3rkyyv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzx3rkyyv"/>`,
		"fallback": "game-icons:sing",
	});
}

export default Component;
