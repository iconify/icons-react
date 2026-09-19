import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec43ctbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ec43ctbch"/>`,
		"fallback": "iconamoon:number-7-fill",
	});
}

export default Component;
