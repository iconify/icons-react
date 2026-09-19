import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gijfkbcsp.css';

const viewBox = {"width":1664,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gijfkbcsp"/>`,
		"fallback": "fa:upload",
	});
}

export default Component;
