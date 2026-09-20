import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fky30xblx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fky30xblx"/>`,
		"fallback": "streamline-flex:text-file-solid",
	});
}

export default Component;
