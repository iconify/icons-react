import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5snn3b0a.css';
import '../../css/e/ek3qulhkz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5snn3b0a"/><path clip-rule="evenodd" class="ek3qulhkz"/>`,
		"fallback": "qlementine-icons:sort-time-desc-16",
	});
}

export default Component;
