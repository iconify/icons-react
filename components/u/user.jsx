import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs47dhnyt.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs47dhnyt"/>`,
		"fallback": "fa6-regular:user",
	});
}

export default Component;
