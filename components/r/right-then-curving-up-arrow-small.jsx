import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riurxjb8f.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riurxjb8f"/>`,
		"fallback": "dinkie-icons:right-then-curving-up-arrow-small",
	});
}

export default Component;
