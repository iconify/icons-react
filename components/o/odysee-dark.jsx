import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4vkm2byy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4vkm2byy"/>`,
		"fallback": "selfhst:odysee-dark",
	});
}

export default Component;
