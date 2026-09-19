import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqtxu6dol.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqtxu6dol"/>`,
		"fallback": "dinkie-icons:upside-down-face-small",
	});
}

export default Component;
