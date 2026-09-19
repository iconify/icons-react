import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2qpr6-4i.css';

const viewBox = {"width":2112,"height":1920};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2qpr6-4i"/>`,
		"fallback": "vs:party",
	});
}

export default Component;
