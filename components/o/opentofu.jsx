import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxf3e8pmi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxf3e8pmi"/>`,
		"fallback": "devicon-plain:opentofu",
	});
}

export default Component;
