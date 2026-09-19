import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2e2c-bxm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2e2c-bxm"/>`,
		"fallback": "file-icons:kusto-alt",
	});
}

export default Component;
