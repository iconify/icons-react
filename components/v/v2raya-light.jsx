import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkveu1byu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkveu1byu"/>`,
		"fallback": "selfhst:v2raya-light",
	});
}

export default Component;
