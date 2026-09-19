import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5dn2uken.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5dn2uken"/>`,
		"fallback": "fa7-regular:object-group",
	});
}

export default Component;
