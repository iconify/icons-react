import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9z6qm4bq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9z6qm4bq"/>`,
		"fallback": "game-icons:lightning-slashes",
	});
}

export default Component;
