import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0-fa_nrd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w0-fa_nrd"/>`,
		"fallback": "gravity-ui:square-dot",
	});
}

export default Component;
