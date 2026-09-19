import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i08er2b1o.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i08er2b1o"/>`,
		"fallback": "devicon-plain:storybook",
	});
}

export default Component;
