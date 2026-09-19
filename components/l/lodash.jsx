import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk-u7ac7z.css';
import '../../css/h/h3iug1uno.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk-u7ac7z"/><path class="h3iug1uno"/>`,
		"fallback": "devicon:lodash",
	});
}

export default Component;
