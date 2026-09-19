import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-p42fy6v.css';

const viewBox = {"width":1024,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-p42fy6v"/>`,
		"fallback": "whh:shipping",
	});
}

export default Component;
