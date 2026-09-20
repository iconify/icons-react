import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfh5m5bzm.css';
import '../../css/k/kwvibbeog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bfh5m5bzm"/><path clip-rule="evenodd" class="kwvibbeog"/>`,
		"fallback": "qlementine-icons:location-16",
	});
}

export default Component;
