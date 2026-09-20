import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocf6fy74a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocf6fy74a"/>`,
		"fallback": "quill:printer",
	});
}

export default Component;
