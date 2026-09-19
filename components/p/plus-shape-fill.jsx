import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez-3s-a2s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ez-3s-a2s"/>`,
		"fallback": "gravity-ui:plus-shape-fill",
	});
}

export default Component;
