import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zkd0ogbjs.css';
import '../../css/x/xxxv1cy8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zkd0ogbjs"/><path class="xxxv1cy8e"/></g>`,
		"fallback": "iconamoon:sign-factorial-light",
	});
}

export default Component;
