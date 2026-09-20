import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oijq4ku3u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oijq4ku3u"/>`,
		"fallback": "streamline-plump:spiral-shape",
	});
}

export default Component;
