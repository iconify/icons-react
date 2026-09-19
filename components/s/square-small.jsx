import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8kyhtbde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8kyhtbde"/>`,
		"fallback": "icon-park-solid:square-small",
	});
}

export default Component;
