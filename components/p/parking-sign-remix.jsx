import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8rj16bqg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d8rj16bqg"/>`,
		"fallback": "streamline:parking-sign-remix",
	});
}

export default Component;
