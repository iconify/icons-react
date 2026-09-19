import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x055icb4a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x055icb4a"/>`,
		"fallback": "f7:logo-facebook",
	});
}

export default Component;
