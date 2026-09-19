import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta2un9b3f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta2un9b3f"/>`,
		"fallback": "f7:text-aligncenter",
	});
}

export default Component;
