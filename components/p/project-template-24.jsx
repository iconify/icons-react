import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9-fgdbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9-fgdbkr"/>`,
		"fallback": "octicon:project-template-24",
	});
}

export default Component;
