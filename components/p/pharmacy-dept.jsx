import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt6cdybgt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dt6cdybgt"/>`,
		"fallback": "healthicons:pharmacy-dept",
	});
}

export default Component;
