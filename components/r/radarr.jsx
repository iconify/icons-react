import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8pj9_5hr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8pj9_5hr"/>`,
		"fallback": "thesvg-color:radarr",
	});
}

export default Component;
