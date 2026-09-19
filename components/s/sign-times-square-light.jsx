import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm0nyq04j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm0nyq04j"/>`,
		"fallback": "iconamoon:sign-times-square-light",
	});
}

export default Component;
