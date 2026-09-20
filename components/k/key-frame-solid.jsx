import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm98stbbv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zm98stbbv"/>`,
		"fallback": "streamline-flex:key-frame-solid",
	});
}

export default Component;
