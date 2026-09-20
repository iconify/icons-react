import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufzg5m6eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufzg5m6eg"/>`,
		"fallback": "mdi:tumble-dryer-alert",
	});
}

export default Component;
