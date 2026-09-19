import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjntb4z9a.css';

const viewBox = {"width":750,"height":810};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjntb4z9a"/>`,
		"fallback": "il:refresh",
	});
}

export default Component;
