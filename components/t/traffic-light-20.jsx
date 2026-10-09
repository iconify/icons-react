import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmaryiywy.css';
import '../../css/y/ytqlk8bxg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmaryiywy"/><path class="ytqlk8bxg"/>`,
		"fallback": "energy-icons:traffic-light-20",
	});
}

export default Component;
