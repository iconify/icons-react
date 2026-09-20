import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cai2cxbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cai2cxbtt"/>`,
		"fallback": "streamline-sharp:rotate-right-solid",
	});
}

export default Component;
