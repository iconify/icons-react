import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm0y8yomm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm0y8yomm"/>`,
		"fallback": "bi:signpost",
	});
}

export default Component;
