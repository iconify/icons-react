import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzlcu1b4x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzlcu1b4x"/>`,
		"fallback": "cib:proto-io",
	});
}

export default Component;
