import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlrbs6dvh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlrbs6dvh"/>`,
		"fallback": "dinkie-icons:text-edit-small",
	});
}

export default Component;
