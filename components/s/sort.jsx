import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8r--obkv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8r--obkv"/>`,
		"fallback": "vaadin:sort",
	});
}

export default Component;
