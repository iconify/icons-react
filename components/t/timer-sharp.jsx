import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygy8b74rs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygy8b74rs"/>`,
		"fallback": "famicons:timer-sharp",
	});
}

export default Component;
