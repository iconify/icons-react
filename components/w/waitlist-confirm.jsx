import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejvz2abjp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejvz2abjp"/>`,
		"fallback": "fluent-mdl2:waitlist-confirm",
	});
}

export default Component;
