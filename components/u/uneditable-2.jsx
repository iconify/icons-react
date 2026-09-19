import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-rnl9toc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-rnl9toc"/>`,
		"fallback": "fluent-mdl2:uneditable-2",
	});
}

export default Component;
