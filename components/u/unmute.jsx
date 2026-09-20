import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j20z8obis.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j20z8obis"/>`,
		"fallback": "octicon:unmute",
	});
}

export default Component;
