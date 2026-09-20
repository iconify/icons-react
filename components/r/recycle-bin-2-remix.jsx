import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsomw9b0p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fsomw9b0p"/>`,
		"fallback": "streamline:recycle-bin-2-remix",
	});
}

export default Component;
