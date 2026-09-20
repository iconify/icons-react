import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1v1pfb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1v1pfb5s"/>`,
		"fallback": "keyline-icons:panels-right-bottom-fill",
	});
}

export default Component;
