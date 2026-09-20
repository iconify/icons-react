import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asp71d7jk.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asp71d7jk"/>`,
		"fallback": "maki:rocket-11",
	});
}

export default Component;
