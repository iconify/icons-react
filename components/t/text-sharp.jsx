import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dok1_95jx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dok1_95jx"/>`,
		"fallback": "ion:text-sharp",
	});
}

export default Component;
