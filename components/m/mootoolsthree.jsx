import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxee2fbbd.css';

const viewBox = {"width":961,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxee2fbbd"/>`,
		"fallback": "whh:mootoolsthree",
	});
}

export default Component;
