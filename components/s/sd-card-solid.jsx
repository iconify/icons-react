import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7vn98a0y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w7vn98a0y"/>`,
		"fallback": "teenyicons:sd-card-solid",
	});
}

export default Component;
