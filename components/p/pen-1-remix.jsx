import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5vb70bhn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z5vb70bhn"/>`,
		"fallback": "streamline-flex:pen-1-remix",
	});
}

export default Component;
