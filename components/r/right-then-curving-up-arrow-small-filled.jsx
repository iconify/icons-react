import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sem2f4bwj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sem2f4bwj"/>`,
		"fallback": "dinkie-icons:right-then-curving-up-arrow-small-filled",
	});
}

export default Component;
