import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y22bk_bbt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y22bk_bbt"/>`,
		"fallback": "streamline:signal-medium-solid",
	});
}

export default Component;
