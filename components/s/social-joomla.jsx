import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emgorab8j.css';
import '../../css/f/faez3bb4d.css';
import '../../css/p/pjip0acda.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emgorab8j"/><path class="faez3bb4d"/><path class="pjip0acda"/>`,
		"fallback": "foundation:social-joomla",
	});
}

export default Component;
