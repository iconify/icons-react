import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/het-occyv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="het-occyv"/>`,
		"fallback": "cib:strava",
	});
}

export default Component;
