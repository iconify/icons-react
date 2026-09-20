import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq6ae5uin.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cq6ae5uin"/>`,
		"fallback": "streamline:tea-cup-solid",
	});
}

export default Component;
