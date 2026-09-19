import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb64-8qmd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb64-8qmd"/>`,
		"fallback": "dinkie-icons:robot-face",
	});
}

export default Component;
