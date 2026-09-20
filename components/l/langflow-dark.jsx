import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fed1tjq0m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fed1tjq0m"/>`,
		"fallback": "selfhst:langflow-dark",
	});
}

export default Component;
