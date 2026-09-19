import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk7v8qlqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk7v8qlqw"/>`,
		"fallback": "hugeicons:rotate-right-05",
	});
}

export default Component;
