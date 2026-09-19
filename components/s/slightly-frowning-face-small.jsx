import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x57nb3bxi.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x57nb3bxi"/>`,
		"fallback": "dinkie-icons:slightly-frowning-face-small",
	});
}

export default Component;
