import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw9aoy2ge.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw9aoy2ge"/>`,
		"fallback": "pinhead:memorial-stone-with-inscription",
	});
}

export default Component;
