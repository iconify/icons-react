import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-_jqacwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-_jqacwf"/>`,
		"fallback": "selfhst:vodia",
	});
}

export default Component;
