import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_gcnebof.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_gcnebof"/>`,
		"fallback": "whh:parkingmeter",
	});
}

export default Component;
