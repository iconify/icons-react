import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkb5lwquw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkb5lwquw"/>`,
		"fallback": "lucide:triangles-centerline-dashed-vertical",
	});
}

export default Component;
