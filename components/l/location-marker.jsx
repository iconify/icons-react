import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_zm2yjss.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i_zm2yjss"/>`,
		"fallback": "heroicons-solid:location-marker",
	});
}

export default Component;
