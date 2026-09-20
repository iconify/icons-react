import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp3xnnb9f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp3xnnb9f"/>`,
		"fallback": "pinhead:taco",
	});
}

export default Component;
