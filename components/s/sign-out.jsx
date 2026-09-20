import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynf4fk1jh.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynf4fk1jh"/>`,
		"fallback": "octicon:sign-out",
	});
}

export default Component;
