import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk39dzjib.css';
import '../../css/z/z1ayc1bqn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk39dzjib"/><path clip-rule="evenodd" class="z1ayc1bqn"/>`,
		"fallback": "qlementine-icons:midi-2-16",
	});
}

export default Component;
