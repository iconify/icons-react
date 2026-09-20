import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msfe4rzvr.css';

const viewBox = {"width":120,"height":257};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msfe4rzvr"/>`,
		"fallback": "thesvg-color:mongodb-dark",
	});
}

export default Component;
