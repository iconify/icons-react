import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzysrobyt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzysrobyt"/>`,
		"fallback": "dinkie-icons:no-smoking-symbol",
	});
}

export default Component;
