import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/copfoo41a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="copfoo41a"/>`,
		"fallback": "selfhst:latex-dark",
	});
}

export default Component;
