import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv78kg08c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv78kg08c"/>`,
		"fallback": "withicons:package-open-gloss",
	});
}

export default Component;
