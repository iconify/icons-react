import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9yi8_btw.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9yi8_btw"/>`,
		"fallback": "fa6-brands:salesforce",
	});
}

export default Component;
