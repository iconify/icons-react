import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de84vab6n.css';

const viewBox = {"width":34,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de84vab6n"/>`,
		"fallback": "et:trophy",
	});
}

export default Component;
