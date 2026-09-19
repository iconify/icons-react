import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t04w3ucra.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t04w3ucra"/>`,
		"fallback": "f7:pause",
	});
}

export default Component;
