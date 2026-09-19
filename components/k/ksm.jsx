import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhizzz3fb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhizzz3fb"/>`,
		"fallback": "cryptocurrency:ksm",
	});
}

export default Component;
