import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi7ny305v.css';

const viewBox = {"width":1136.55,"height":1136.55};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi7ny305v"/>`,
		"fallback": "thesvg-color:roborock",
	});
}

export default Component;
