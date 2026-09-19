import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eahdk6b0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eahdk6b0y"/>`,
		"fallback": "file-icons:openzfs",
	});
}

export default Component;
