import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpjp_c7is.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rpjp_c7is"/>`,
		"fallback": "at-icons:sauropod",
	});
}

export default Component;
