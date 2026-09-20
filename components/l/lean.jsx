import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqme3kbqa.css';

const viewBox = {"width":4.5,"height":4.5,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqme3kbqa"/>`,
		"fallback": "material-icon-theme:lean",
	});
}

export default Component;
