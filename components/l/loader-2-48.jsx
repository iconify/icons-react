import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkwo4-r4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkwo4-r4a"/>`,
		"fallback": "energy-icons:loader-2-48",
	});
}

export default Component;
