import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vovp7w37k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vovp7w37k"/>`,
		"fallback": "devicon:stackblitz",
	});
}

export default Component;
