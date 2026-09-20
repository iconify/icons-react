import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnk1eyalb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnk1eyalb"/>`,
		"fallback": "thesvg-color:pets-at-home",
	});
}

export default Component;
