import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a772m_d8u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a772m_d8u"/>`,
		"fallback": "streamline:line-arrow-up-dashed-square-remix",
	});
}

export default Component;
