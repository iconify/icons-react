import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm4a30b9t.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm4a30b9t"/>`,
		"fallback": "picon:playstore",
	});
}

export default Component;
