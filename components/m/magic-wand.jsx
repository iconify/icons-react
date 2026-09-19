import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4o7a5b6x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d4o7a5b6x"/>`,
		"fallback": "gravity-ui:magic-wand",
	});
}

export default Component;
