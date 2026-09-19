import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvk1xwstj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvk1xwstj"/>`,
		"fallback": "ion:logo-yahoo",
	});
}

export default Component;
