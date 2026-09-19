import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbilb_8jc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbilb_8jc"/>`,
		"fallback": "dinkie-icons:page-curl-filled",
	});
}

export default Component;
