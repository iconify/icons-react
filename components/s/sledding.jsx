import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiyq-lezc.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiyq-lezc"/>`,
		"fallback": "temaki:sledding",
	});
}

export default Component;
