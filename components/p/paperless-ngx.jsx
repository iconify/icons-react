import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjs21sbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjs21sbzn"/>`,
		"fallback": "thesvg-color:paperless-ngx",
	});
}

export default Component;
