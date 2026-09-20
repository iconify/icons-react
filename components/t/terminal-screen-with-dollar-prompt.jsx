import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojjmu_19i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojjmu_19i"/>`,
		"fallback": "pinhead:terminal-screen-with-dollar-prompt",
	});
}

export default Component;
