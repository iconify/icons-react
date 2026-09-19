import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh6ezcbax.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh6ezcbax"/>`,
		"fallback": "dinkie-icons:otfeature-ccmp-small-filled",
	});
}

export default Component;
