import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v71nd2bub.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v71nd2bub"/>`,
		"fallback": "dinkie-icons:otfeature-hrzt",
	});
}

export default Component;
