import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0ei_2o1l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l0ei_2o1l"/>`,
		"fallback": "heroicons-solid:shield-check",
	});
}

export default Component;
