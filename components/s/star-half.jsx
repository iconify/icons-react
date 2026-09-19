import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbe08qa1c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbe08qa1c"/>`,
		"fallback": "bi:star-half",
	});
}

export default Component;
