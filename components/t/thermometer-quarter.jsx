import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bapu0m6tu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bapu0m6tu"/>`,
		"fallback": "fa7-solid:thermometer-quarter",
	});
}

export default Component;
