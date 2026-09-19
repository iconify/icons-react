import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdb8j2bld.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdb8j2bld"/>`,
		"fallback": "fa-brands:joomla",
	});
}

export default Component;
