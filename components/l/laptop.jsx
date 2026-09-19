import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcbi4xmlj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcbi4xmlj"/>`,
		"fallback": "fa7-solid:laptop",
	});
}

export default Component;
