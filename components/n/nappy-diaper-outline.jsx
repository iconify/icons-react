import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5t1ojbag.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x5t1ojbag"/>`,
		"fallback": "healthicons:nappy-diaper-outline",
	});
}

export default Component;
