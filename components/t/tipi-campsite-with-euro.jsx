import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8amhqiwk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8amhqiwk"/>`,
		"fallback": "pinhead:tipi-campsite-with-euro",
	});
}

export default Component;
