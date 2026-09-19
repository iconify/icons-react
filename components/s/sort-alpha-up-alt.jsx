import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us7pqh5os.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us7pqh5os"/>`,
		"fallback": "fa-solid:sort-alpha-up-alt",
	});
}

export default Component;
