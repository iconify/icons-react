import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot9-f-jds.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot9-f-jds"/>`,
		"fallback": "pinhead:south-dakota",
	});
}

export default Component;
