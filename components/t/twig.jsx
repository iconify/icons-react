import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn6a84b8w.css';

const viewBox = {"width":409,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn6a84b8w"/>`,
		"fallback": "file-icons:twig",
	});
}

export default Component;
