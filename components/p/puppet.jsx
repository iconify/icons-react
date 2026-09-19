import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aldf9vb3c.css';

const viewBox = {"width":335,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aldf9vb3c"/>`,
		"fallback": "file-icons:puppet",
	});
}

export default Component;
