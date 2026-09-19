import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq2m4g_iz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq2m4g_iz"/>`,
		"fallback": "carbon:unplug",
	});
}

export default Component;
