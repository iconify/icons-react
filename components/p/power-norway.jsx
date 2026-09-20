import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qapox--0t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qapox--0t"/>`,
		"fallback": "selfhst:power-norway",
	});
}

export default Component;
