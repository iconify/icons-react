import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6i9ncbjo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i6i9ncbjo"/>`,
		"fallback": "gravity-ui:square-check",
	});
}

export default Component;
