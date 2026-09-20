import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhwcq_t9m.css';
import '../../css/u/u47ngdbbz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhwcq_t9m"/><path clip-rule="evenodd" class="u47ngdbbz"/>`,
		"fallback": "qlementine-icons:ruler-16",
	});
}

export default Component;
