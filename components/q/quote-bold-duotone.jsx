import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk6ovimpe.css';
import '../../css/g/g9tggne-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk6ovimpe"/><path class="g9tggne-e"/>`,
		"fallback": "solar:quote-bold-duotone",
	});
}

export default Component;
