import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv78f1c7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv78f1c7s"/>`,
		"fallback": "vadivam:triangles-centerline-dashed-horizontal",
	});
}

export default Component;
