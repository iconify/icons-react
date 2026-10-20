import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-k-i5ydk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-k-i5ydk"/>`,
		"fallback": "energy-icons:option-key-48",
	});
}

export default Component;
