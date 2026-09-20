import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or6uk3bhu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or6uk3bhu"/>`,
		"fallback": "ix:java-script",
	});
}

export default Component;
