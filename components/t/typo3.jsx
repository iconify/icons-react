import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czjjpdb5n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czjjpdb5n"/>`,
		"fallback": "devicon:typo3",
	});
}

export default Component;
