import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hadxb356p.css';
import '../../css/o/o8jdmjbti.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hadxb356p"/><path class="o8jdmjbti"/>`,
		"fallback": "selfhst:octoprint",
	});
}

export default Component;
