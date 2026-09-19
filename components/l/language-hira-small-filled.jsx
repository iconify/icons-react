import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv7ok14ch.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv7ok14ch"/>`,
		"fallback": "dinkie-icons:language-hira-small-filled",
	});
}

export default Component;
