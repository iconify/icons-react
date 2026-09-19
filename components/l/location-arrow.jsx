import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeywum6wo.css';

const viewBox = {"width":1408,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeywum6wo"/>`,
		"fallback": "fa:location-arrow",
	});
}

export default Component;
