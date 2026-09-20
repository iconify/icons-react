import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8y4s4lst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8y4s4lst"/>`,
		"fallback": "thesvg-color:teepublic",
	});
}

export default Component;
