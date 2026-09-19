import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eft6sfbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eft6sfbff"/>`,
		"fallback": "cbi:lg-air-purifier",
	});
}

export default Component;
