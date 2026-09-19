import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2jx_csvf.css';

const viewBox = {"width":1664,"height":1632};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2jx_csvf"/>`,
		"fallback": "fa:rocket",
	});
}

export default Component;
