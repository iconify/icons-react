import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4he1pszq.css';
import '../../css/t/tsn023e7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4he1pszq"/><path clip-rule="evenodd" class="tsn023e7p"/>`,
		"fallback": "basil:trash-alt-solid",
	});
}

export default Component;
