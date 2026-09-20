import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-y81wbnx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-y81wbnx"/>`,
		"fallback": "pinhead:jp-cemetery",
	});
}

export default Component;
