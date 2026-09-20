import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1u8bfmde.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1u8bfmde"/>`,
		"fallback": "memory:message-user",
	});
}

export default Component;
