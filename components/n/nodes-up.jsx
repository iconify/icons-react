import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u01px0b2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u01px0b2n"/>`,
		"fallback": "gravity-ui:nodes-up",
	});
}

export default Component;
