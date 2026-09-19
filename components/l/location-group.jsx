import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7y8ago1i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7y8ago1i"/>`,
		"fallback": "carbon:location-group",
	});
}

export default Component;
