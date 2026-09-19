import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uswl93bdi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uswl93bdi"/>`,
		"fallback": "icon-park-outline:ladder-one",
	});
}

export default Component;
