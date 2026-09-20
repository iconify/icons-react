import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak-_2kb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak-_2kb0i"/>`,
		"fallback": "lucide:triangles-centerline-dashed-horizontal",
	});
}

export default Component;
