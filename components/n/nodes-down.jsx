import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_4x7bc7n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p_4x7bc7n"/>`,
		"fallback": "gravity-ui:nodes-down",
	});
}

export default Component;
