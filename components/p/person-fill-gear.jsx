import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv_eu50mb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv_eu50mb"/>`,
		"fallback": "bi:person-fill-gear",
	});
}

export default Component;
