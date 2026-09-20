import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrcq17b5i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrcq17b5i"/>`,
		"fallback": "picon:rise",
	});
}

export default Component;
