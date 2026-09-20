import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrcm38g4h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrcm38g4h"/>`,
		"fallback": "pinhead:person-dancing-with-sparkles",
	});
}

export default Component;
