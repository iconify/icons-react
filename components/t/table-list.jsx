import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/docw4db7y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="docw4db7y"/>`,
		"fallback": "fa7-solid:table-list",
	});
}

export default Component;
