import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-c2luh3c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-c2luh3c"/>`,
		"fallback": "streamline-plump:layout-right-sidebar",
	});
}

export default Component;
