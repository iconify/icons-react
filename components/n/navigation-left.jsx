import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owp42ei7e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owp42ei7e"/>`,
		"fallback": "ix:navigation-left",
	});
}

export default Component;
