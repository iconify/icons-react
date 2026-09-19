import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilf97_gpl.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilf97_gpl"/>`,
		"fallback": "fa-brands:vk",
	});
}

export default Component;
