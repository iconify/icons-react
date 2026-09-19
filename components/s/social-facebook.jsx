import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdm0tqzzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdm0tqzzr"/>`,
		"fallback": "ion:social-facebook",
	});
}

export default Component;
