import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otn30pbbb.css';
import '../../css/b/bezz-3_ya.css';
import '../../css/v/v-xbbnb7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otn30pbbb"/><path class="bezz-3_ya"/><path class="v-xbbnb7c"/>`,
		"fallback": "selfhst:little-chat",
	});
}

export default Component;
