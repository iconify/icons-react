import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe7lh5wmf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe7lh5wmf"/>`,
		"fallback": "fluent-mdl2:page-list-solid",
	});
}

export default Component;
