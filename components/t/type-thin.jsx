import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks2-_5wjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks2-_5wjt"/>`,
		"fallback": "iconamoon:type-thin",
	});
}

export default Component;
