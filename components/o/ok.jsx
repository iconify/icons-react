import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7giafb7e.css';
import '../../css/a/az0bq2bba.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="e7giafb7e"/><path class="az0bq2bba"/>`,
		"fallback": "flat-color-icons:ok",
	});
}

export default Component;
