import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwde3obxb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uwde3obxb"/>`,
		"fallback": "lsicon:vip-consume-filled",
	});
}

export default Component;
