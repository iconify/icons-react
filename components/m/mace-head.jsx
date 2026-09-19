import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbt8sdbfc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbt8sdbfc"/>`,
		"fallback": "game-icons:mace-head",
	});
}

export default Component;
