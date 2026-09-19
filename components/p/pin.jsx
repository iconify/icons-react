import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfqs5rbqa.css';

const viewBox = {"width":304,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfqs5rbqa"/>`,
		"fallback": "zmdi:pin",
	});
}

export default Component;
