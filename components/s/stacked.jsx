import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5a1gdciz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5a1gdciz"/>`,
		"fallback": "picon:stacked",
	});
}

export default Component;
