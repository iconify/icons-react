import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyy7thb3v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyy7thb3v"/>`,
		"fallback": "fa6-solid:plate-wheat",
	});
}

export default Component;
