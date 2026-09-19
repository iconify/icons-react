import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejan3lbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejan3lbnl"/>`,
		"fallback": "akar-icons:soundcloud-fill",
	});
}

export default Component;
