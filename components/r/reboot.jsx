import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r80c0vbst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r80c0vbst"/>`,
		"fallback": "ix:reboot",
	});
}

export default Component;
