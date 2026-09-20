import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_woru4wu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_woru4wu"/>`,
		"fallback": "selfhst:nasa-worm-light",
	});
}

export default Component;
