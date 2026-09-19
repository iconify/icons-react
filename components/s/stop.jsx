import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge59ohb3j.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge59ohb3j"/>`,
		"fallback": "f7:stop",
	});
}

export default Component;
