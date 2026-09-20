import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fslcfj99a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fslcfj99a"/>`,
		"fallback": "selfhst:threads-light",
	});
}

export default Component;
