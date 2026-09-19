import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a59z83fjf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a59z83fjf"/>`,
		"fallback": "f7:paragraph",
	});
}

export default Component;
