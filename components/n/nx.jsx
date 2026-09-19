import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt-5-tn3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt-5-tn3f"/>`,
		"fallback": "file-icons:nx",
	});
}

export default Component;
