import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zad99_9ay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zad99_9ay"/>`,
		"fallback": "selfhst:npr-one-dark",
	});
}

export default Component;
