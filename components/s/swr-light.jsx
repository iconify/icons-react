import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otd35ob1f.css';

const viewBox = {"width":2200,"height":2200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otd35ob1f"/>`,
		"fallback": "thesvg-color:swr-light",
	});
}

export default Component;
