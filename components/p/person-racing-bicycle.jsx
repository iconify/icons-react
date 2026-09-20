import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b69k8vrkz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b69k8vrkz"/>`,
		"fallback": "pinhead:person-racing-bicycle",
	});
}

export default Component;
