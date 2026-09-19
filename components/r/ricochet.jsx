import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf0-_jovq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf0-_jovq"/>`,
		"fallback": "game-icons:ricochet",
	});
}

export default Component;
