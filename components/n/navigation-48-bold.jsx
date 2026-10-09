import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xehkvvg-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xehkvvg-z"/>`,
		"fallback": "energy-icons:navigation-48-bold",
	});
}

export default Component;
