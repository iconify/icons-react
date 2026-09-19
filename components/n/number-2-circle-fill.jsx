import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymougub6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ymougub6v"/>`,
		"fallback": "iconamoon:number-2-circle-fill",
	});
}

export default Component;
