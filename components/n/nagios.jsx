import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd3noewjg.css';

const viewBox = {"width":51.89,"height":64,"left":4.66,"top":-1.4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd3noewjg"/>`,
		"fallback": "thesvg-color:nagios",
	});
}

export default Component;
