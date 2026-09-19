import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inzdrrbby.css';

const viewBox = {"width":367,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inzdrrbby"/>`,
		"fallback": "file-icons:mermaid",
	});
}

export default Component;
