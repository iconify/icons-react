import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpiko3bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpiko3bpj"/>`,
		"fallback": "thesvg-color:lenovo",
	});
}

export default Component;
