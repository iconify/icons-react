import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq71x92eg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq71x92eg"/>`,
		"fallback": "fa7-brands:speaker-deck",
	});
}

export default Component;
