import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmh97ubke.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmh97ubke"/>`,
		"fallback": "fa7-regular:tired",
	});
}

export default Component;
