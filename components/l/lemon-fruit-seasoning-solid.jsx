import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztked6bew.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ztked6bew"/>`,
		"fallback": "streamline:lemon-fruit-seasoning-solid",
	});
}

export default Component;
