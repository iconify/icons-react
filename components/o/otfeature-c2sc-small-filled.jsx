import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quhe-fjie.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quhe-fjie"/>`,
		"fallback": "dinkie-icons:otfeature-c2sc-small-filled",
	});
}

export default Component;
