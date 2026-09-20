import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfk5gh6or.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfk5gh6or"/>`,
		"fallback": "material-icon-theme:parcel",
	});
}

export default Component;
