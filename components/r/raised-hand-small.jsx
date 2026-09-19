import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr0qihbzv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr0qihbzv"/>`,
		"fallback": "dinkie-icons:raised-hand-small",
	});
}

export default Component;
