import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owszh3d2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owszh3d2o"/>`,
		"fallback": "game-icons:surprised-skull",
	});
}

export default Component;
