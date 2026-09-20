import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr-e1ac-t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sr-e1ac-t"/>`,
		"fallback": "pajamas:pipeline",
	});
}

export default Component;
