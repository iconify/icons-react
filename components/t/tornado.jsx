import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgi5fe4yu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgi5fe4yu"/>`,
		"fallback": "bi:tornado",
	});
}

export default Component;
