import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcoia7b6s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcoia7b6s"/>`,
		"fallback": "fa7-solid:satellite",
	});
}

export default Component;
