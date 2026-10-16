import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it6b2o5on.css';
import '../../css/z/znj3s6bsn.css';

const viewBox = {"width":1314.4,"height":1314.4,"left":340.8,"top":342.8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it6b2o5on"/><path class="znj3s6bsn"/>`,
		"fallback": "thesvg-color:soketi",
	});
}

export default Component;
