import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_4dfqpjl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_4dfqpjl"/>`,
		"fallback": "nimbus:share",
	});
}

export default Component;
