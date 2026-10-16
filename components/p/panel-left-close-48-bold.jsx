import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9a09orqa.css';
import '../../css/e/ecr-u4bsa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9a09orqa"/><path class="ecr-u4bsa"/>`,
		"fallback": "energy-icons:panel-left-close-48-bold",
	});
}

export default Component;
