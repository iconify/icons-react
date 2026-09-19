import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4hv1ab-b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4hv1ab-b"/>`,
		"fallback": "dinkie-icons:view-grid",
	});
}

export default Component;
