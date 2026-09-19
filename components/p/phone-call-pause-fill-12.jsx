import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imgn3pbml.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imgn3pbml"/>`,
		"fallback": "garden:phone-call-pause-fill-12",
	});
}

export default Component;
