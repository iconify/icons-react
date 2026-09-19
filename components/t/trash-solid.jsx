import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4he1pszq.css';
import '../../css/a/ag8l5kbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4he1pszq"/><path clip-rule="evenodd" class="ag8l5kbvz"/>`,
		"fallback": "basil:trash-solid",
	});
}

export default Component;
