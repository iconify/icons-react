import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz7mqwbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gz7mqwbik"/>`,
		"fallback": "iconamoon:squinting-face-fill",
	});
}

export default Component;
