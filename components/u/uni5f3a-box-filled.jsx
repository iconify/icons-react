import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw0ytwqdk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw0ytwqdk"/>`,
		"fallback": "dinkie-icons:uni5f3a-box-filled",
	});
}

export default Component;
