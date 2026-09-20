import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo_vedc_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo_vedc_a"/>`,
		"fallback": "selfhst:mailpit-dark",
	});
}

export default Component;
