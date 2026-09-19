import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8hjgpb4r.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8hjgpb4r"/>`,
		"fallback": "topcoat:view",
	});
}

export default Component;
