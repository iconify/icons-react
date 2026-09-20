import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b20da4xzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b20da4xzr"/>`,
		"fallback": "streamline-plump:moustache",
	});
}

export default Component;
