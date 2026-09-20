import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gznph3b8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gznph3b8d"/>`,
		"fallback": "streamline-plump:steps-1-solid",
	});
}

export default Component;
