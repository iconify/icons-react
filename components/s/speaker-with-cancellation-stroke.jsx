import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdkvpfbry.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdkvpfbry"/>`,
		"fallback": "dinkie-icons:speaker-with-cancellation-stroke",
	});
}

export default Component;
