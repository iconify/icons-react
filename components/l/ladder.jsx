import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc-ogab1s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc-ogab1s"/>`,
		"fallback": "game-icons:ladder",
	});
}

export default Component;
