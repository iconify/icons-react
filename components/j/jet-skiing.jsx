import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cstzu4b_z.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cstzu4b_z"/>`,
		"fallback": "map:jet-skiing",
	});
}

export default Component;
