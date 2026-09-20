import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmnnnw1xp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmnnnw1xp"/>`,
		"fallback": "selfhst:runson",
	});
}

export default Component;
