import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5yplhb0m.css';
import '../../css/y/y49f7hyag.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5yplhb0m"/><path class="y49f7hyag"/>`,
		"fallback": "energy-icons:magma-chamber-48",
	});
}

export default Component;
