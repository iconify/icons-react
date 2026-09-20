import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5dp0acml.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5dp0acml"/>`,
		"fallback": "selfhst:pangolin",
	});
}

export default Component;
