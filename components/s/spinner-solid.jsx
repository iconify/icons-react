import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7u7tdb3x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7u7tdb3x"/>`,
		"fallback": "lineicons:spinner-solid",
	});
}

export default Component;
