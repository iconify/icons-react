import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vigrvql6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vigrvql6l"/>`,
		"fallback": "game-icons:safety-pin",
	});
}

export default Component;
