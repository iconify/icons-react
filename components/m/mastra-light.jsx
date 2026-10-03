import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuc7jk3pr.css';

const viewBox = {"width":429.02,"height":429.02,"left":116,"top":34.49};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuc7jk3pr"/>`,
		"fallback": "thesvg-color:mastra-light",
	});
}

export default Component;
