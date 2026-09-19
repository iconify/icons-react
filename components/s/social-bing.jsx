import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8e3o6bwj.css';
import '../../css/r/r0h4debhp.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="q8e3o6bwj"/><path class="r0h4debhp"/>`,
		"fallback": "foundation:social-bing",
	});
}

export default Component;
