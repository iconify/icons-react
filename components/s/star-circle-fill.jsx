import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r39wynb1x.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r39wynb1x"/>`,
		"fallback": "f7:star-circle-fill",
	});
}

export default Component;
