import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz9olu_-p.css';

const viewBox = {"width":508,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz9olu_-p"/>`,
		"fallback": "file-icons:silverstripe",
	});
}

export default Component;
