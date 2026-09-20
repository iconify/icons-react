import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm9y4iblw.css';
import '../../css/z/zkrbon-zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm9y4iblw"/><path class="zkrbon-zb"/>`,
		"fallback": "tdesign:palace-4-filled",
	});
}

export default Component;
