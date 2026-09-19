import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na54l-b4h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na54l-b4h"/>`,
		"fallback": "dinkie-icons:java-sparrow-white",
	});
}

export default Component;
