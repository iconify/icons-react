import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huh-o7buc.css';

const viewBox = {"width":819,"height":636};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huh-o7buc"/>`,
		"fallback": "ls:readability",
	});
}

export default Component;
