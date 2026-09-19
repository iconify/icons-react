import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cep-q2bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cep-q2bxl"/>`,
		"fallback": "flowbite:printer-solid",
	});
}

export default Component;
