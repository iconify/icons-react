import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t53n6nbft.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t53n6nbft"/>`,
		"fallback": "pinhead:splash-up-from-water",
	});
}

export default Component;
