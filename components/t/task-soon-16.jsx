import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdrw_-bzd.css';
import '../../css/m/m0a6ogbci.css';
import '../../css/d/deo436eby.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fdrw_-bzd"/><path class="m0a6ogbci"/><path clip-rule="evenodd" class="deo436eby"/>`,
		"fallback": "qlementine-icons:task-soon-16",
	});
}

export default Component;
