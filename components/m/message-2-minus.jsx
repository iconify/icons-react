import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x08w35tyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x08w35tyu"/>`,
		"fallback": "tabler:message-2-minus",
	});
}

export default Component;
