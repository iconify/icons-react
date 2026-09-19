import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp2m1wbna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp2m1wbna"/>`,
		"fallback": "game-icons:perpendicular-rings",
	});
}

export default Component;
