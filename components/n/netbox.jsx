import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhsc1vb_v.css';
import '../../css/w/wpob71b5x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhsc1vb_v"/><path class="wpob71b5x"/>`,
		"fallback": "thesvg-color:netbox",
	});
}

export default Component;
