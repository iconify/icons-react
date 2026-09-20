import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxftx6b1l.css';
import '../../css/n/ncu40jb7n.css';
import '../../css/m/m6donjb3q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxftx6b1l"/><path class="ncu40jb7n"/><path class="m6donjb3q"/>`,
		"fallback": "selfhst:the-verge",
	});
}

export default Component;
