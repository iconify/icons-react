import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb46vdbeu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb46vdbeu"/>`,
		"fallback": "pinhead:motorboat",
	});
}

export default Component;
