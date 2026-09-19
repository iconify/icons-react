import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as7rq8bai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as7rq8bai"/>`,
		"fallback": "ion:play-back-circle-sharp",
	});
}

export default Component;
