import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdx7i4plj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdx7i4plj"/>`,
		"fallback": "at-icons:megaphone",
	});
}

export default Component;
