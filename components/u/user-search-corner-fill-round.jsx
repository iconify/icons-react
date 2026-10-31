import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4gjz5bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4gjz5bln"/>`,
		"fallback": "coolicons:user-search-corner-fill-round",
	});
}

export default Component;
