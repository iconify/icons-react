import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si3nracbo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si3nracbo"/>`,
		"fallback": "energy-icons:rows-48",
	});
}

export default Component;
