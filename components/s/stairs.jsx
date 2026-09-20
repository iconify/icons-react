import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz8qy3bgs.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz8qy3bgs"/>`,
		"fallback": "medical-icon:stairs",
	});
}

export default Component;
