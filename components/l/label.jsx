import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rey4ck1nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rey4ck1nf"/>`,
		"fallback": "mynaui:label",
	});
}

export default Component;
