import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogi60eb_u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogi60eb_u"/>`,
		"fallback": "nimbus:planet",
	});
}

export default Component;
