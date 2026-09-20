import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn6c7gbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zn6c7gbdg"/>`,
		"fallback": "reicon:undo-filled",
	});
}

export default Component;
