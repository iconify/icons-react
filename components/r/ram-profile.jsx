import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oenq7gbdw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oenq7gbdw"/>`,
		"fallback": "game-icons:ram-profile",
	});
}

export default Component;
