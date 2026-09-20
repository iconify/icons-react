import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d24y88b6x.css';

const viewBox = {"width":256,"height":209};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d24y88b6x"/>`,
		"fallback": "thesvg-color:twitter",
	});
}

export default Component;
