import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p13ni4b9t.css';
import '../../css/n/n3vra2bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p13ni4b9t"/><path class="n3vra2bpp"/>`,
		"fallback": "boxicons:news",
	});
}

export default Component;
