import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gafr-ibcu.css';

const viewBox = {"width":434,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gafr-ibcu"/>`,
		"fallback": "file-icons:keynote",
	});
}

export default Component;
