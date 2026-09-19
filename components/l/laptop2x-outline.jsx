import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6nrgy6io.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r6nrgy6io"/>`,
		"fallback": "healthicons:laptop2x-outline",
	});
}

export default Component;
