import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcgb2zbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcgb2zbqm"/>`,
		"fallback": "thesvg-color:vestel",
	});
}

export default Component;
