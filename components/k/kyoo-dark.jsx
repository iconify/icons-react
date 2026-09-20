import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p28549lqi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p28549lqi"/>`,
		"fallback": "selfhst:kyoo-dark",
	});
}

export default Component;
