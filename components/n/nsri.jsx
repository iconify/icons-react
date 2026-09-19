import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjzqs1bqw.css';

const viewBox = {"width":426,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjzqs1bqw"/>`,
		"fallback": "file-icons:nsri",
	});
}

export default Component;
