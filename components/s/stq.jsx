import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajxg0wh-g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajxg0wh-g"/>`,
		"fallback": "cryptocurrency:stq",
	});
}

export default Component;
