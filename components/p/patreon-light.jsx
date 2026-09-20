import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wti_j-baf.css';

const viewBox = {"width":36,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wti_j-baf"/>`,
		"fallback": "thesvg-color:patreon-light",
	});
}

export default Component;
