import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd5vm9b-d.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd5vm9b-d"/>`,
		"fallback": "picon:plus1",
	});
}

export default Component;
