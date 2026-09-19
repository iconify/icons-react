import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5p5msbyw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r5p5msbyw"/>`,
		"fallback": "healthicons:tally",
	});
}

export default Component;
