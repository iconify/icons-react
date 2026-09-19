import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdzm7zkpu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdzm7zkpu"/>`,
		"fallback": "dinkie-icons:uni5f3a-box",
	});
}

export default Component;
