import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzh1ikioz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzh1ikioz"/>`,
		"fallback": "pinhead:person-squatting",
	});
}

export default Component;
