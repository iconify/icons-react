import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laaq2cmmd.css';
import '../../css/g/g948z0bkd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laaq2cmmd"/><path clip-rule="evenodd" class="g948z0bkd"/>`,
		"fallback": "qlementine-icons:ui-panel-top-16",
	});
}

export default Component;
