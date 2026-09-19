import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twias7bgg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twias7bgg"/>`,
		"fallback": "f7:logo-googleplus",
	});
}

export default Component;
