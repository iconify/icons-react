import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt9f3ub2o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gt9f3ub2o"/>`,
		"fallback": "heroicons-solid:map-pin",
	});
}

export default Component;
