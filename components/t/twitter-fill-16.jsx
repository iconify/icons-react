import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eif6ntbsc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eif6ntbsc"/>`,
		"fallback": "qlementine-icons:twitter-fill-16",
	});
}

export default Component;
