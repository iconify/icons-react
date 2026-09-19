import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwzbg8b2h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwzbg8b2h"/>`,
		"fallback": "dinkie-icons:microphone",
	});
}

export default Component;
