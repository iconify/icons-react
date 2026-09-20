import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgr41sxqf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgr41sxqf"/>`,
		"fallback": "pajamas:remove-all",
	});
}

export default Component;
