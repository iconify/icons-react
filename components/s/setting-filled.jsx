import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ock7hh_4o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ock7hh_4o"/>`,
		"fallback": "lsicon:setting-filled",
	});
}

export default Component;
