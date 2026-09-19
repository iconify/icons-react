import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a52ntckww.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a52ntckww"/>`,
		"fallback": "f7:textformat-size",
	});
}

export default Component;
