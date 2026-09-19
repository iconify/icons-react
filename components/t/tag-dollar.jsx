import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d62mt21tr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d62mt21tr"/>`,
		"fallback": "gravity-ui:tag-dollar",
	});
}

export default Component;
