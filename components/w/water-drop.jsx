import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npwimhb4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npwimhb4n"/>`,
		"fallback": "game-icons:water-drop",
	});
}

export default Component;
