import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nihah-b_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nihah-b_l"/>`,
		"fallback": "streamline-plump:panoramic-screen",
	});
}

export default Component;
