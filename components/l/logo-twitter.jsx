import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbgjkd1hn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbgjkd1hn"/>`,
		"fallback": "f7:logo-twitter",
	});
}

export default Component;
