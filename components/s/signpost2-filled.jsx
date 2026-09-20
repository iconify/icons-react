import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aja8p_b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aja8p_b7c"/>`,
		"fallback": "reicon:signpost2-filled",
	});
}

export default Component;
