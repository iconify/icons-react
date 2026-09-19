import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enctr0ztd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enctr0ztd"/>`,
		"fallback": "iconamoon:number-1-bold",
	});
}

export default Component;
