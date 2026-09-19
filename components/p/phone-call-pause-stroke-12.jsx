import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhe2hvncw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhe2hvncw"/>`,
		"fallback": "garden:phone-call-pause-stroke-12",
	});
}

export default Component;
