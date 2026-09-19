import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe5h34l0u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qe5h34l0u"/>`,
		"fallback": "gravity-ui:location-arrow",
	});
}

export default Component;
