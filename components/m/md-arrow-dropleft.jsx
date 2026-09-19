import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv-v65iws.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv-v65iws"/>`,
		"fallback": "ion:md-arrow-dropleft",
	});
}

export default Component;
