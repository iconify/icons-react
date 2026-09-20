import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq8hgbwan.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eq8hgbwan"/>`,
		"fallback": "lsicon:picking-guidance-filled",
	});
}

export default Component;
