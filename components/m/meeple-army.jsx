import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh_w85bmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh_w85bmb"/>`,
		"fallback": "game-icons:meeple-army",
	});
}

export default Component;
