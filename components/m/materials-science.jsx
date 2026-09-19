import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk3_oybfs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk3_oybfs"/>`,
		"fallback": "game-icons:materials-science",
	});
}

export default Component;
