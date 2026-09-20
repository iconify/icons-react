import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkmm9wb0q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkmm9wb0q"/>`,
		"fallback": "streamline:interface-file-zip-file-common-zip",
	});
}

export default Component;
