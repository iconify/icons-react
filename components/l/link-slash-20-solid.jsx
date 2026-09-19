import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8nu7c66p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x8nu7c66p"/>`,
		"fallback": "heroicons:link-slash-20-solid",
	});
}

export default Component;
