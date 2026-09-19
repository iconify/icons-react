import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylwo9q-ek.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ylwo9q-ek"/>`,
		"fallback": "heroicons:variable-20-solid",
	});
}

export default Component;
