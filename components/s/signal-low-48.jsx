import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbe-n9nml.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbe-n9nml"/>`,
		"fallback": "energy-icons:signal-low-48",
	});
}

export default Component;
