import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpj3yzbxt.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpj3yzbxt"/>`,
		"fallback": "dinkie-icons:otfeature-smcp-small-filled",
	});
}

export default Component;
