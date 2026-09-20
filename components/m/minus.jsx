import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt6v-jbiv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt6v-jbiv"/>`,
		"fallback": "raphael:minus",
	});
}

export default Component;
