import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tncv02bgt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tncv02bgt"/>`,
		"fallback": "heroicons:trash-16-solid",
	});
}

export default Component;
