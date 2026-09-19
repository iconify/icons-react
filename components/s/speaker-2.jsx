import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc3az4b4c.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc3az4b4c"/>`,
		"fallback": "f7:speaker-2",
	});
}

export default Component;
