import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8xe9sbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b8xe9sbyl"/>`,
		"fallback": "iconamoon:number-5-square-fill",
	});
}

export default Component;
