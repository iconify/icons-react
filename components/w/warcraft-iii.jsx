import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrwpp37dl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrwpp37dl"/>`,
		"fallback": "file-icons:warcraft-iii",
	});
}

export default Component;
