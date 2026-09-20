import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9-e7g7ml.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9-e7g7ml"/>`,
		"fallback": "lineicons:unlink",
	});
}

export default Component;
