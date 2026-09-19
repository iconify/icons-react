import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6z0351mq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6z0351mq"/>`,
		"fallback": "game-icons:walrus-head",
	});
}

export default Component;
